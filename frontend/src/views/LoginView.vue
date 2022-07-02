<template>
  <article id="loginPage-container">
    <section id="logo-img" class="login-info-section">
      <span class="logo"><img src="@/assets/img/dotto.svg" alt="logo" /></span>
    </section>

    <article class="login-info-section">
      <form @submit.prevent="login">
        <section>
          <input @focus="clearMsg" class="login-info" type="text" v-model="id" placeholder="아이디" />
        </section>
        <section>
          <input @focus="clearMsg" class="login-info" autocomplete="off" type="password" v-model="password" placeholder="비밀번호" />
        </section>
        <p id="warning-msg" class="text-center">{{ loginFailed }}</p>
        <section id="auto-login-wrapper">
          <input type="checkbox" id="auto" @change="saveId" v-model="save">
          <label for="auto"></label> <span id="auto-login">아이디 저장</span>
        </section>
        <section>
          <button id="login-btn" type="submit">로그인</button>
        </section>
      </form>
    </article>

    <br />

    <article class="login-info-section">
      <img id="social-login-division" src="@/assets/icons/mymenu/login_SimpleLine.svg" alt="간편로그인 /">
      <article id="login-btn-img">
        <section class="google-btn-section">
          <button id="google-btn" class="social-btn-01">
            <img src="@/assets/img/login/Google.png" alt="google" />
          </button>
        </section>

        <section class="kakao-btn-section">
          <button id="kakao-btn" class="social-btn-02" @click="kakaoLogin">
            <img src="@/assets/img/login/kakao.png" alt="kakao" />
          </button>
        </section>
      </article>

    </article>

    <br />

    <article>
      <section id="register-box">
        <section id="lost-password" class="password-section">
          <router-link class="login-router forgot-user-info" to="#"><small>비밀번호 찾기</small></router-link>
        </section>
        <section id="join">
          <div id="register" class="join-section">
            <button class="login-router" @click="showRegisterView"><small>회원가입 하기</small></button>
          </div>
        </section>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";

export interface IKakao {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  refresh_token_expires_in: number,
  scope: string,
  token_type: string,
}

@Component({
  components: {
  }
})
export default class LoginView extends Vue {
  id = '';
  password = '';
  save = false;
  loginFailedMsg = '';
  modalTypeRegister = '';

  params = {
    client_id: process.env.VUE_APP_GOOGLE_KEY
  }

  constructor() {
    super();
  }

  created(): void {
    this.getCookie();
  }

  async login(): Promise<void> {
    const sendData: IUser.ILoginProp = {
      id: this.id,
      password: this.password
    };
    const { data } = await this.axios.post('/sign-in', sendData) as { data: IUser.ILoginSuccess }
    const { success } = data;
    if (success) {
      if (this.save) this.saveId();
      this.saveState(data);
      await this.$router.push({
        path: '/dotto'
      });
    } else {
      this.loginFailed = '이메일 및 패스워드를 확인해주세요.';
    }
  }

  saveId(): void{
    if(this.save) {
      this.$cookies.set('idCookie', this.id,'30d');
    } else {
      this.$cookies.remove('idCookie');
      this.id = '';
    }
  }

  getCookie(): void {
    if (this.$cookies.isKey('idCookie')){
      this.id = this.$cookies.get('idCookie');
      this.save = true;
    }
  }

  saveState(userData: IUser.ILoginSuccess): void {
    this.$store.commit('userStore/login', userData);
  }

  clearMsg(): void {
    this.loginFailed = '';
  }


  //------ 간편 로그인 ------
  private kakaoLogin(): void {
    window.Kakao.init(process.env.VUE_APP_KAKAO_KEY);
    const SCOPE = process.env.VUE_APP_SCOPE;
    window.Kakao.Auth.login({
      scope: SCOPE,
      success: this.getKakaoAPI
    });
  }

  private getKakaoAPI(userInfo: IKakao): void {
    console.log(userInfo);
    window.Kakao.API.request({
      url: '/v2/user/me',
      success: (res: any) => {
        const kakao_account = res.kakao_account;
        const kakao_info = {
          email: kakao_account.email,
          nickname: kakao_account.profile.nickname,
          birthday: kakao_account.birthday,
          gender: kakao_account.gender
        };
        console.log(kakao_info);
        //TODO: 정보 조회 후 존재하면 로그인
        // 존재하지 않으면 회원가입 함수 태우기
      },
      fail: (error: any) => {
        console.log(error);
      }
    });
  }

  @Emit('modalTypeRegister')
  private showRegisterView() {
    return this.modalTypeRegister = 'RegisterView';
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
hr {
  width: 80%;
}

#loginPage-container {
  display: flex;
  max-width: 400px;
  margin: 45px auto 45px auto;
  flex-direction: column;
  align-items: center;
}

.login-info {
  background: #fafafa;
  outline: none;
  width: 100%;
  border: 1px solid #eeeeee;
  height: 30px;
  font-size: 11px;
  padding-left: 5px;
  margin-bottom: 10px;
  border-radius: 2px;
}

.login-info-section {
  width: 75%;
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
  content: '✓';
  color: #05152f;
  font-weight: 800;
  font-size: 12px;
  padding-bottom: 3px;
  width: 10px;
  text-align: center;
  position: absolute;
  left: 1px;
  top: -3px;
}

#auto-login {
  font-size: 9px;
  margin-left: 5px;
}
#auto-login-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

#login-btn {
  border: 1px solid gray;
  border-radius: 3px;
  color: white;
  font-size: 12px;
  padding: 5px;
  background: #222222;
  width: 100%;
}

#login-btn-img {
  display: flex;
  /*position: relative;*/
  left: -10px;
}

#login-btn:hover{
  background: #464646;
  color: #ffffff;
}
#login-btn-img > div {
  /*margin-left: 20px;*/
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
  font-size: 12px;
  text-decoration: none;

}
.login-router:hover {
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  color: #565656;
}
.forgot-user-info {

}
/* 소셜 로그인 관련 */
/* 구분선 */
#social-login-division {
  width: 100%;
  margin-bottom: 10px;
}

#simple-login-icons {
  display: flex;
  justify-content: center;
}

#login-btn-img > li {
  float: left;

}

.social-btn-01 {
  border: 1px solid #eeeeee;
  border-radius: 3px;
  width: 255px;
  height: 30px;
  padding: 1px 0;
}
.social-btn-02 {
  border: 1px solid #eeeeee;
  border-radius: 3px;
  width: 255px;
  height: 30px;
  margin-top: 40px;
  padding: 1px 0;
}
#google-btn {
  background: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#google-btn::after {
  content: '구글 계정으로 로그인';
  font-size: 7px;
  color: #888888;
  font-weight: 600;
}
#kakao-btn {
  background: #fddc3f;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
#kakao-btn::after {
  content: '';
  font-size: 7px;
  color: #595959;
  font-weight: 600;
}
#login-btn-img > section > button > img {
  width: 25px;
  position: relative;
}
#lost-password, #join {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 5em;
}
#lost-password > span,  #join > span {
  font-size: 12px;
}
#warning-msg {
  color: red;
  font-size: 6px;
}


.google-btn-section {
  width: 0px;
  height: 0px;
}

.kakao-btn-section {
  width: 0px;
  height: 0px;
}

.password-section {
  /*!important;*/
  margin-top: 70px;
  margin-left: 10px;
}

.join-section {
  margin-top: 136px;
  margin-left: 10px;
}
</style>
