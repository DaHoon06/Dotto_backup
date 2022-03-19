<template>
  <section>
    <div class="container-fluid bg-white rounded" @submit.prevent="register">
      <b-row align-h="center">
        <b-col cols="6">
          <b-form-input @blur="validationEmail" type="text" v-model="email" placeholder="이메일" />
        </b-col>
        <b-col cols="3">
          <div>
            <b-form-select v-model="domain" :options="emailList" class="mt-1" size="sm"></b-form-select>
          </div>
        </b-col>
        <b-col cols="3">
          <b-button class="mt-2 register-btn" @click="emailCheck" type="button">중복확인</b-button>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <div class="col-12">
          <div class="mt-2 warning-msg">{{ this.EmailMessage }}</div>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12">
          <b-form-input class="mt-2" type="password" @change="validationPassword" v-model="password" placeholder="비밀번호" />
        </div>
      </b-row>
      <b-row align-h="center">
        <div class="col-12">
          <div class="mt-2 warning-msg">{{ this.PasswordMessage }}</div>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12">
          <b-form-input type="password" class="mt-2" @change="validationPassword" v-model="passwordCheck" placeholder="비밀번호 확인" />
        </div>
        <div class="col-12">
          <div class="mt-2 warning-msg">{{ this.PasswordCheckMessage }}</div>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-9">
          <b-form-input class="mt-1" type="text" @focus="msgClear" v-model="nickName" placeholder="닉네임" />
        </div>
        <div class="col-3">
          <b-button @click="nickNameCheck" class="register-btn" type="button">중복확인</b-button>
        </div>
      </b-row>
      <b-row align-h="center">
        <div class="col-12">
          <div class="mt-1 warning-msg">{{ this.NickNameMessage }}</div>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-9">
          <b-form-input class="mt-2" type="text" v-model="phone" placeholder="휴대폰번호 입력" />
        </div>
        <div class="col-3">
          <b-button class="mt-1 register-btn">인증번호받기</b-button>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-9">
          <b-form-input class="mt-1" type="text" placeholder="인증번호 입력" />
        </div>
        <div class="col-3">
          <b-button class="mt-1 register-btn">인증하기</b-button>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12">
          <input class="mt-3" type="checkbox" v-model="agree"> 이용약관 및 개인정보 처리 방침에 동의합니다.
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12">
          <b-button class="mt-4 register-btn" id="register-submit" type="submit">가입하기</b-button>
        </div>
      </b-row>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";

@Component
export default class MemberRegisterComponent extends Vue {
  @Prop() type?: string;

  email: string;
  password: string;
  passwordCheck: string;
  nickName: string;
  phone: string;
  emailList: IUser.SelectedOptions[];
  domain: string;
  agree: boolean;
  concatEmail: string;
  nickNameMessage: string;
  passwordMessage: string;
  passwordCheckMessage: string;
  emailMessage: string;

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.passwordCheck = '';
    this.nickName = '';
    this.phone = '';
    this.emailList = [
      { value: '1', text: 'gmail.com', },
      { value: '2', text: 'naver.com', },
      { value: '3', text: 'daum.net', },
      { value: '4', text: 'nate.com', },
    ];
    this.domain = '';
    this.agree = false;
    this.concatEmail = '';
    this.nickNameMessage = '';
    this.passwordMessage = '';
    this.passwordCheckMessage = '';
    this.emailMessage = '';
  }

  private validationEmail(): void {
    // 이메일 풀 주소 정규식 /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const reg = /^[a-zA-Z0-9]*$/;
    let msg = '';
    if(!reg.test(this.email)){
      msg = '이메일 주소를 정확히 입력해주세요.'
      this.EmailMessage = msg;
      this.email = '';
    } else {
      msg = '';
      this.EmailMessage = msg;
    }
  }

  async emailCheck(): Promise<void> {
    this.email = this.joinEmail();
    const { data } = await this.axios.get('/members/readEmail', {
      params: {
        email: this.email,
      }
    })
    const { result } = data;
    console.log(result);
  }

  private joinEmail(): string{
    return this.concatEmail = this.email.concat('@').concat(this.domain);
  }

  async nickNameCheck(): Promise<void> {
    const { data } = await this.axios.get('/members/readNickName',{
      params: {
        nickName: this.nickName,
      }
    });
    const { result } = data;
    let msg = '';

    if(result) {
      msg = '사용가능한 닉네임 입니다.';
      this.NickNameMessage = msg;
    } else {
      msg = '이미 사용중인 닉네임입니다.';
      this.NickNameMessage = msg;
    }
  }

  validationPassword(): void {
    let msg = '';
    const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(!reg.test(this.password)) {
      msg = '하나 이상의 문자, 하나의 숫자 및 특수문자를 조합하여 8자 이상 입력해주세요.';
      this.PasswordMessage = msg;
    } else {
      msg = '';
      this.PasswordMessage = msg;
    }

    if(this.password !== this.passwordCheck) {
      msg = '비밀번호를 다시 한 번 확인해주세요.';
      this.PasswordCheckMessage = msg;
    } else {
      msg = '비밀번호가 일치합니다.';
      this.PasswordCheckMessage = msg;
    }
  }

  async register(): Promise<void> {
    if(this.agree){
      const sendData: IUser.IRegisterProp = {
        nickName: this.nickName,
        password: this.password,
        email: this.concatEmail,
        phone: this.phone
      };
      //TODO: 반환 data에 대한 타입 정의
      const { data } = await this.axios.post('/members/', sendData) as { data: any };
      const { result } = data;

      if(result) {
        await this.$router.push({
          path: '/login'
        })
      } else {
        alert('ERROR');
      }
    } else {
      alert('약관에 동의해주세요.');
    }
  }

  msgClear(): void{
    if(this.NickNameMessage !== '사용가능한 닉네임 입니다.') {
      this.NickNameMessage = '';
      this.nickName = '';
    }
  }
  private set NickNameMessage(msg: string) {
    this.nickNameMessage = msg
  }
  private get NickNameMessage() {
    return this.nickNameMessage;
  }
  private set PasswordMessage(msg: string) {
    this.passwordMessage = msg;
  }
  private get PasswordMessage() {
    return this.passwordMessage;
  }
  private set PasswordCheckMessage(msg: string) {
    this.passwordCheckMessage = msg;
  }
  private get PasswordCheckMessage() {
    return this.passwordCheckMessage;
  }
  private set EmailMessage(msg: string) {
    this.emailMessage = msg;
  }
  private get EmailMessage() {
    return this.emailMessage;
  }


}
</script>

<style scoped>
#register-submit {
  width: 100%;
}

.register-btn {
  border: 1px solid #858585;
  border-radius: 7px;
  box-shadow: 1px 1px 1px #a6a6a6;
  color: white;
  background: #072350;
  font-size: 11px;
  height: 25px;
  padding: 4px 12px 6px 12px;
}

.register-btn:hover {
  cursor: pointer;
  background: #05152f;
}

.warning-msg {
  font-size: 7px;
  color: red;
  padding-left: 10px;
}

</style>