<template>
  <main id="loginPage-container">
    <section id="logo-img">
      닷투
    </section>
    <section>
      <form @submit.prevent="login">
        <p>
          <input @focus="clearMsg" class="login-info" type="text" v-model="email" placeholder="아이디" />
        </p>
        <p>
          <input @focus="clearMsg" class="login-info" type="password" v-model="password" placeholder="비밀번호" />
        </p>
        <p style="color: red; font-size: 6px;" class="text-center">{{ this.loginFailed }}</p>
        <p>
          <input type="checkbox" @change="saveId" v-model="save"> 자동 로그인
        </p>
        <p>
          <button id="login-btn" type="submit" >로그인</button>
        </p>
      </form>
      <div id="register-box">
        <div id="register">
          <router-link to="/register">회원가입</router-link>
        </div>
        <div id="lost-identify">
          <router-link to="#">아이디</router-link> / <router-link to="#">비밀번호 찾기</router-link>
        </div>
      </div>
    </section>
    <section>
      <div>
        간편 회원가입
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";

@Component
export default class LoginView extends Vue {
  email: string;
  password: string;
  save: boolean;
  loginFailedMsg: string;

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.save = false;
    this.loginFailedMsg = '';
  }

  created(): void {
    this.getCookie();
  }

  async login(): Promise<void> {
    const sendData: IUser.ILoginProp = {
      MEMBER_ID: this.email,
      PASSWORD: this.password
    };
    const { data } = await this.axios.post('/sign-in', sendData) as { data: IUser.ILoginSuccess }
    const { result } = data;
    if(result) {
      this.saveState(data);
      await this.$router.push({
        path: '/'
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
    this.$store.commit('userStore/setUserState',userData);
  }

  clearMsg(): void {
    this.loginFailed = '';
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
.login-info {
  width: 100%;
}
#logo-img {
  margin-bottom: 30px;
}
#logo-img img {
  width: 200px;
  transform: rotate(-4deg);
}
#loginPage-container {
  display: flex;
  margin-top: 10rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

#login-btn {
  border: 1px solid gray;
  border-radius: 7px;
  box-shadow: 1px 1px 1px gray;
  color: white;
  background: #072350;
  width: 100%;
}

#login-btn:hover{
  background: #1048a2;
  color: #e1d8d8;
}

#register-box {
  display: flex;
}
#register {
  margin-right: 10px;
}
</style>
