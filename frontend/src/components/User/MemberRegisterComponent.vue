<template>
  <section>
    <form @click.prevent="register">
      <div>
        <input
            @blur="validationEmail"
            type="text"
            v-model="email"
            placeholder="이메일" />
        <b-form-select
            v-model="domain"
            :options="emailList"
            size="sm" />
        <button class="register-btn" @click="emailCheck" type="button">중복확인</button>
      </div>

      <p class="warning-msg">{{ this.EmailMessage }}</p>

      <div>
        <input
            type="password" autocomplete="off"
            @change="validationPassword"
            v-model="password"
            placeholder="비밀번호" />
      </div>
      <p class="warning-msg">{{ this.PasswordMessage }}</p>

      <div>
        <input
            type="password" autocomplete="off"
            @change="validationPassword"
            v-model="passwordCheck"
            placeholder="비밀번호 확인" />
      </div>
      <p class="warning-msg">{{ this.PasswordCheckMessage }}</p>

      <div>
        <input
            type="text"
            @focus="msgClear"
            v-model="nickName"
            placeholder="닉네임" />
        <button @click="nickNameCheck" class="register-btn" type="button">중복확인</button>
      </div>
      <p class="warning-msg">{{ this.NickNameMessage }}</p>

      <div>
        <input type="text" v-model="phone" placeholder="휴대폰번호 입력" />
        <button class="register-btn">인증번호받기</button>
      </div>

      <div>
        <input type="text" placeholder="인증번호 입력" />
        <button class="register-btn">인증하기</button>
      </div>

      <div class="col-12 mt-2">
        <input class="selected-gender ml-1" type="radio" id="male" v-model="gender" value="male" name="male" />
        <label for="male">남성</label>
        <input class="selected-gender" type="radio" id="female" v-model="gender" value="female" name="female" />
        <label for="female">여성</label>
        <input class="selected-gender" type="radio" id="empty" v-model="gender" value="empty" name="empty" />
        <label for="empty">선택안함</label>
      </div>

      <div>
        <input type="checkbox" v-model="agree"> 이용약관 및 개인정보 처리 방침에 동의합니다.
      </div>
      <div>
        <button class="register-btn" id="register-submit" type="button" @click="register">가입하기</button>
      </div>
   </form>
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
  gender: string;

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.passwordCheck = '';
    this.nickName = '';
    this.phone = '';
    this.emailList = [
      { value: 'gmail.com', text: 'gmail.com', },
      { value: 'naver.com', text: 'naver.com', },
      { value: 'daum.net', text: 'daum.net', },
      { value: 'nate.com', text: 'nate.com', },
    ];
    this.domain = '';
    this.agree = false;
    this.concatEmail = '';
    this.nickNameMessage = '';
    this.passwordMessage = '';
    this.passwordCheckMessage = '';
    this.emailMessage = '';
    this.gender = '';
  }

  private validationEmail(): void {
    // 이메일 풀 주소 정규식 /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const reg = /^[a-zA-Z0-9]*$/;
    let msg = '';
    if (!reg.test(this.email)) {
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

    if (result) {
      msg = '';
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

    if (this.password !== this.passwordCheck) {
      msg = '비밀번호를 다시 한 번 확인해주세요.';
      this.PasswordCheckMessage = msg;
    } else {
      msg = '';
      this.PasswordCheckMessage = msg;
    }
  }

  async register(): Promise<void> {
    if (this.agree){
      this.joinEmail()
      const sendData: IUser.IRegisterProp = {
        nickname: this.nickName,
        password: this.password,
        email: this.concatEmail,
        phone: this.phone,
        gender: this.gender,
      };

      //TODO: 반환 data에 대한 타입 정의
      const { data } = await this.axios.post('/sign-up', sendData) as { data: any };
      const { success } = data;
      if (success) {
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