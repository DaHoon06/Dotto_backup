<template>
  <article id="login-container">
    <article id="logo-wrapper" class="login-info-section">
      <img src="@/assets/img/dotto.svg" alt="logo" id="logo" />
    </article>

    <article class="login-info-section">
      <form @submit.prevent="login">
        <section class="login-btn-wrapper">
          <input
            @focus="clearMsg"
            class="login-info"
            type="text"
            v-model="id"
            placeholder="아이디"
          />
        </section>
        <section class="login-btn-wrapper">
          <input
            @focus="clearMsg"
            class="login-info"
            autocomplete="off"
            type="password"
            v-model="password"
            placeholder="비밀번호"
          />
        </section>
        <p id="warning-msg" class="text-center">{{ loginFailed }}</p>
        <section id="id-save-wrapper">
          <input type="checkbox" id="save" @change="saveId" v-model="save" />
          <label for="save"></label> <span id="id-save">아이디 저장</span>
        </section>
        <section class="login-btn-wrapper">
          <button id="login-btn" type="submit">로그인</button>
        </section>
      </form>
    </article>

    <article class="login-info-section">
      <img
        id="social-login-division"
        src="@/assets/icons/mymenu/login_SimpleLine.svg"
        alt="간편로그인 /"
      />
      <article id="social-login-btn-container">
        <section class="login-btn-wrapper">
          <button type="button" id="kakao-btn" @click="kakaoLogin">
            <img
              src="@/assets/img/login/kakao.png"
              alt="카카오 로그인 이미지"
            />
          </button>
        </section>

        <section class="login-btn-wrapper">
          <button type="button" id="google-btn" @click="googleLogin">
            <img src="@/assets/img/login/Google.png" alt="구글 로그인 이미지" />
          </button>
        </section>
      </article>
    </article>

    <article id="login-utils-container">
      <section id="password-find">
        <router-link class="login-router forgot-user-info" to="#"
          >비밀번호 찾기</router-link
        >
      </section>
      <section id="line-division">|</section>
      <section id="join">
        <button class="login-router" @click="showRegisterView">
          회원가입 하기
        </button>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";

@Component({
  components: {},
})
export default class LoginView extends Vue {
  id = "";
  password = "";
  save = false;
  loginFailedMsg = "";
  modalTypeRegister = "";

  params = {
    client_id: process.env.VUE_APP_GOOGLE_KEY,
  };

  created(): void {
    this.getCookie();
  }

  async login(): Promise<void> {
    const sendData: IUser.ILoginProp = {
      id: this.id,
      password: this.password,
    };
    const { data } = (await this.axios.post("/sign-in", sendData)) as {
      data: IUser.ILoginSuccess;
    };
    const { success } = data;
    if (success) {
      if (this.save) this.saveId();
      this.saveState(data);
      this.$store.commit("utilsStore/closeModal", true);
      const { path } = this.$router.currentRoute;
      if (path === '/dotto') {
        this.$router.go(0);
      } else {
        await this.$router.push("/dotto");
      }
      this.closeModal();
    } else {
      this.loginFailed = "이메일 및 패스워드를 확인해주세요.";
    }
  }

  saveId(): void {
    if (this.save) {
      this.$cookies.set("idCookie", this.id, "30d");
    } else {
      this.$cookies.remove("idCookie");
      this.id = "";
    }
  }

  getCookie(): void {
    if (this.$cookies.isKey("idCookie")) {
      this.id = this.$cookies.get("idCookie");
      this.save = true;
    }
  }

  saveState(userData: IUser.ILoginSuccess): void {
    this.$store.commit("userStore/login", userData);
  }

  clearMsg(): void {
    this.loginFailed = "";
  }

  //------ 간편 로그인 ------
  private kakaoLogin(): void {
    const SCOPE = process.env.VUE_APP_SCOPE;
    window.Kakao.Auth.login({
      scope: SCOPE,
      success: this.getKakaoAPI,
    });
  }

  private async getKakaoAPI(userInfo: IUser.Kakao): Promise<void> {
    const { access_token, refresh_token } = userInfo;
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: async (res: any) => {
        const kakao_account = res.kakao_account;
        const kakao_info: IUser.KakaoUserData = {
          email: kakao_account.email,
          nickname: kakao_account.profile.nickname,
          birthday: kakao_account.birthday,
          gender: kakao_account.gender,
          ageRange: kakao_account.age_range,
        };
        console.log(kakao_info);
        const { email } = kakao_info;
        const result = await this.kakaoLoginCheck(email);
        // 회원가입
        if (!result) {
          const sendData = {
            id: kakao_info.email,
            nickname: kakao_info.nickname,
            gender: kakao_info.gender,
            loginType: 'kakao',
          }
          await this.join(sendData);
        } else {
          // store update
          const payload = {
            accessToken: access_token,
            refreshToken: refresh_token,
            nickname: kakao_info.nickname,
            roles: "admin",
          };
          this.$store.commit("userStore/login", payload);
        }
        this.closeModal();
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  }
  private async join(userInfo: IUser.Information) {
    const { data } = await this.axios.post('/sign-up',userInfo);
    console.log(data);
  }
  private async kakaoLoginCheck(email: string): Promise<boolean> {
    const { data } = await this.axios.get(`/members/existsbyid/${email}`);
    const { result } = data;
    const { data: emailCheck } = result;
    // 아이디가 존재하지 않음
    return emailCheck;
  }

  private async googleLogin(): Promise<void> {
    const googleUser = await this.$gAuth.signIn();
    console.log(googleUser);
    const accessToken = googleUser.getAuthResponse().access_token;
    console.log(accessToken);
  }

  private getGoogleAPI() {
    console.log("google");
  }

  @Emit("closeModal")
  private closeModal(): boolean {
    return false;
  }

  @Emit("modalTypeRegister")
  private showRegisterView() {
    return (this.modalTypeRegister = "RegisterView");
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
  margin: 45px auto 0 auto;
  flex-direction: column;
  align-items: center;
}

.login-info {
  background: #ffffff;
  width: 100%;
  height: 100%;
  border: 1px solid #e2e2e2;
  font-size: 18px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
}

.login-info-section {
  width: 100%;
  margin: auto;
}

/* 로고 */
#logo-wrapper {
  margin-bottom: 30px;
  text-align: center;
}
#logo {
  width: 120px;
  margin-bottom: 10px;
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
input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #919191;
  position: relative;
}

input[id="auto"]:checked + label::after {
  content: "✓";
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

/* 로그인 버튼 */
/* 버튼 공용 */
.login-btn-wrapper {
  max-width: 336px;
  width: 100%;
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
}

#login-btn:hover {
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

#password-find,
#join {
  color: #919191;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#line-division {
  color: #e2e2e2;
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
  border: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#google-btn::after {
  content: "구글 계정으로 로그인";
  font-size: 7px;
  color: #888888;
  font-weight: 600;
}
#kakao-btn {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background: #fee500;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
#kakao-btn::after {
  content: "카카오 계정으로 로그인";
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

@media (max-width: 1439px) {
  .login-btn-wrapper {
    width: 70%;
  }
}
</style>
