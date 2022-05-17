<template>
  <main id="loginPage-container">
    <section id="logo-img" class="login-info-section">
      <span class="logo"><img src="@/assets/dotto.jpg" alt="logo" /></span>
    </section>
    <section class="login-info-section">
      <form @submit.prevent="login">
        <p>
          <input @focus="clearMsg" class="login-info" type="text" v-model="email" placeholder="아이디" />
        </p>
        <p>
          <input @focus="clearMsg" class="login-info" autocomplete="off" type="password" v-model="password" placeholder="비밀번호" />
        </p>
        <p style="color: red; font-size: 6px;" class="text-center">{{ this.loginFailed }}</p>
        <p>
          <input type="checkbox" id="auto" @change="saveId" v-model="save"> <label for="auto"></label> <span id="auto-login">자동로그인</span>
        </p>
        <p>
          <button id="login-btn" type="submit">LOGIN</button>
        </p>
      </form>
      <div id="register-box">
        <div id="register">
          <button class="login-router" @click="showRegisterView">회원가입</button>
        </div>
        <div id="lost-identify">
          <router-link class="login-router forgot-user-info" to="#">아이디</router-link>
          <router-link class="login-router forgot-user-info" to="#">비밀번호 찾기</router-link>
        </div>
      </div>
    </section>
    <section class="login-info-section">
      <p id="simple-login" class="login-router">간편 회원가입</p>
      <article id="simple-login-icons">
        <ul id="login-btn-img">
          <li>
            <GoogleLogin :params="params"
                         :onSuccess="googleLoginSuccess"
            :onFailure="googleLoginFailure">
              <img src="@/assets/login/Google.png" alt="google" />
            </GoogleLogin>
            <button>

            </button>
          </li>
          <li>
            <button>
              <img src="@/assets/login/kakao.png" @click="kakaoLogin" alt="kakao" />
            </button>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";
import { GoogleLogin } from 'vue-google-login';

@Component({
  components: {
    GoogleLogin
  }
})
export default class LoginView extends Vue {
  email = '';
  password = '';
  save = false;
  loginFailedMsg = '';
  modalTypeRegister = '';
  $gAuth: any;

  params = {
    // client_id: process.env.GOOGLE_KEY
    client_id: '77854822346-ogb042ak8gh3246d736e1lfj7hmdpjhk.apps.googleusercontent.com'
  }

  constructor() {
    super();
  }

  created(): void {
    this.getCookie();
  }

  async login(): Promise<void> {
    const sendData: IUser.ILoginProp = {
      email: this.email,
      password: this.password
    };
    const { data } = await this.axios.post('/sign-in', sendData) as { data: IUser.ILoginSuccess }
    const { result } = data;
    if (result) {
      this.saveState(data);
      await this.$router.push({
        path: '/dotto'
      })
    } else {
      this.loginFailed = '이메일 및 패스워드를 확인해주세요.';
    }
  }

  saveId(): void{
    if(this.save) {
      this.$cookies.set('emailCookie',this.email,'1d');
    } else {
      this.$cookies.remove('emailCookie');
      this.email = '';
    }
  }

  getCookie(): void {
    if(this.$cookies.isKey('emailCookie')){
      this.email = this.$cookies.get('emailCookie');
      this.save = true;
    }
  }

  saveState(userData: IUser.ILoginSuccess): void {
    this.$store.commit('userStore/setUserState', userData);
  }

  clearMsg(): void {
    this.loginFailed = '';
  }

  private googleLoginSuccess(googleUser: any): void {
    console.log('TEST')
    console.log(googleUser);
    console.log(googleUser)
    console.log('-----------')
    console.log(googleUser.getBasicProfile());
  }
  private googleLoginFailure(test: any) {
    console.log(test,'실패')
  }

  private kakaoLogin(): void {
    window.Kakao.init(process.env.KAKAO_KEY);

    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response: any) {
          console.log(response)
        },
        fail: function (error: any) {
          console.log(error)
        },
      })
      window.Kakao.Auth.setAccessToken(undefined)
      window.Kakao.Auth.login({
        success: () => {
          window.Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ["kakao_account.email"]
            },
            success: async (response: any) => {
              console.log(response);
            },
            fail: (error: any) => {
              console.log(error)
            },
          })
        },fail: (error: any) => {
          console.log(error)
        }
      })
    }
  }

  @Emit('modalTypeRegister')
  private showRegisterView() {
    return this.modalTypeRegister = 'Register';
  }

  private set loginFailed(msg) {
    this.loginFailedMsg = msg;
  }
  private get loginFailed() {
    return this.loginFailedMsg;
  }

}
</script>

<style scoped>
#loginPage-container {
  display: flex;
  max-width: 400px;
  margin: 45px auto 45px auto;
  flex-direction: column;
  align-items: center;
}

.login-info {
  width: 100%;
  border: none;
  font-size: 13px;
  padding-bottom: 3px;
  border-bottom: 1px solid gray;
}

.login-info-section {
  width: 60%;
  margin: auto;
}



#logo-img {
  margin-bottom: 30px;
  text-align: center;
}

#logo-img img {
  width: 120px;
  margin-bottom: 10px;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label{
  display: inline-block;
  width: 15px;
  height: 15px;
  border:1px solid #919191;
  position: relative;
}

input[id="auto"]:checked + label::after{
  content:'✔';
  font-size: 10px;
  padding-bottom: 3px;
  width: 10px;
  text-align: center;
  position: absolute;
  left: 0;
  top: -2px;
}

#auto-login {
  font-size: 9px;
}

#login-btn {
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 0 1px 1px 1px #adadad;
  color: white;
  font-size: 12px;
  padding: 5px;
  background: #222222;
  width: 100%;
}

#login-btn-img {
  padding: 0;
}

#login-btn:hover{
  background: #464646;
  color: #ffffff;
}

#register-box {
  display: flex;
  justify-content: space-evenly;
}

#register > a {
  margin-right: 10px;

}

.login-router {
  color: #919191;
  font-size: 8px;
  text-decoration: none;
}
.login-router:hover {
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #565656;
}
.forgot-user-info {
  margin-right: 7px;
}

#simple-login {
  margin-top: 5px;
  text-align: center;
}

#simple-login-icons {
  display: flex;
  justify-content: center;
}

#login-btn-img > li {
  float: left;
}

#login-btn-img > li > button > img {
  width: 35px;
  margin-right: 12px;
}
</style>
