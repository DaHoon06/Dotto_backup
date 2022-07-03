<template>
  <article id="login-container">
    <section id="logo-img" class="login-info-section">
      <span class="logo"><img src="@/assets/img/dotto.svg" alt="logo" /></span>
    </section>

    <article class="login-info-section">
      <form @submit.prevent="login">
        <section class="login-btn-wrapper">
          <input @focus="clearMsg" class="login-info" type="text" v-model="id" placeholder="아이디" />
        </section>
        <section class="login-btn-wrapper">
          <input @focus="clearMsg" class="login-info" autocomplete="off" type="password" v-model="password" placeholder="비밀번호" />
        </section>
        <p id="warning-msg" class="text-center">{{ loginFailed }}</p>
        <section id="id-save-wrapper">
          <input type="checkbox" id="save" @change="saveId" v-model="save">
          <label for="save"></label> <span id="id-save">아이디 저장</span>
        </section>
        <section class="login-btn-wrapper">
          <button id="login-btn" type="submit">로그인</button>
        </section>
      </form>
    </article>

    <article class="login-info-section">
      <img id="social-login-division" src="@/assets/icons/mymenu/login_SimpleLine.svg" alt="간편로그인 /">
      <article id="social-login-btn-container">
        <section class="login-btn-wrapper">
          <button id="kakao-btn" @click="kakaoLogin">
            <img src="@/assets/img/login/kakao.png" alt="kakao" />
          </button>
        </section>

        <section class="login-btn-wrapper">
          <button id="google-btn">
            <img src="@/assets/img/login/Google.png" alt="google" />
          </button>
        </section>
      </article>

    </article>

    <article id="login-utils-container">
      <section id="password-find">
        <router-link class="login-router forgot-user-info" to="#">비밀번호 찾기</router-link>
      </section>
      <section id="line-division">|</section>
      <section id="join">
        <button class="login-router" @click="showRegisterView">회원가입 하기</button>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";

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

  private getKakaoAPI(userInfo: IUser.Kakao): void {
    console.log(userInfo);
    window.Kakao.API.request({
      url: '/v2/user/me',
      success: (res: any) => {
        const kakao_account = res.kakao_account;
        const kakao_info: IUser.KakaoUserData = {
          email: kakao_account.email,
          nickname: kakao_account.profile.nickname,
          birthday: kakao_account.birthday,
          gender: kakao_account.gender,
          ageRange: kakao_account.age_range
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

#login-container {
  display: flex;
  max-width: 400px;
  margin: 45px auto 45px auto;
  flex-direction: column;
  align-items: center;
}

.login-info {
  background: #ffffff;
  width: 100%;
  height: 100%;
  border: 1px solid #E2E2E2;
  font-size: 18px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
}

.login-info-section {
  width: 100%;
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
/* 아이디 기억 */
#id-save {
  font-size: 9px;
  margin-left: 5px;
}
#id-save-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 33px;
}

/* 로그인 버튼 */
/* 버튼 공용 */
.login-btn-wrapper {
  width: 336px;
  height: 52px;
  margin: auto auto 16px auto;
}
.login-btn-wrapper > button {
  width: 100%;
  height: 100%;
}

/* 메인 로그인 버튼 */
#login-btn {
  border: 1px solid #222222;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  padding: 5px;
  background: #222222;
  margin-top: 32px;
}

#login-btn:hover{
  border: 1px solid #464646;
  background: #464646;
  color: #ffffff;
}

/* 회원가입, 비밀번호 찾기 등 부가적인 요소 */
#login-utils-container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 32px auto 82px auto;
}

.login-router {
  color: #919191;
  font-size: 16px;
  text-decoration: none;

}
.login-router:hover {
  font-weight: bold;
  cursor: pointer;
  color: #565656;
}

#password-find, #join {
  color: #919191;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#line-division {
  color: #E2E2E2;
}


/* 소셜 로그인 관련 */
/* 구분선 */
#social-login-division {
  width: 100%;
  margin: 48px auto 15px auto;
}

#social-login-btn-container {
  display: flex;
  flex-direction: column;
}

#google-btn {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #E2E2E2;
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
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background: #FEE500;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
#kakao-btn::after {
  content: '카카오 계정으로 로그인';
  font-size: 7px;
  color: #595959;
  font-weight: 600;
}
#social-login-btn-container > section > button > img {
  width: 25px;
  position: relative;
}


#warning-msg {
  color: red;
  font-size: 6px;
}

</style>
