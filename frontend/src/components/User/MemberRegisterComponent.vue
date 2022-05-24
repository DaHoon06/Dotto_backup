<template>
  <section id="member-register-wrapper" >
    <form id="member-register-form" @submit.prevent="register">
      <div class="input-wrapper">
        <input
            @blur="validationId"
            type="text"
            v-model="id"
            placeholder="아이디"
            class="input-text" />
        <button class="register-btn" @click="idCheck" type="button">중복확인</button>
      </div>

      <div class="warning-msg">{{ IdMessage }}</div>

      <div class="input-wrapper">
        <input
            type="password" autocomplete="off"
            @change="validationPassword"
            v-model="password"
            placeholder="비밀번호"
            class="input-text" />
      </div>
      <div class="warning-msg">{{ PasswordMessage }}</div>

      <div class="input-wrapper">
        <input
            type="password" autocomplete="off"
            @change="validationPassword"
            v-model="passwordCheck"
            placeholder="비밀번호 확인"
            class="input-text" />
      </div>
      <div class="warning-msg">{{ PasswordCheckMessage }}</div>

      <div class="input-wrapper">
        <input
            type="text"
            @focus="msgClear"
            v-model="nickName"
            placeholder="닉네임"
            class="input-text" />
        <button @click="nickNameCheck" class="register-btn" type="button">중복확인</button>
      </div>
      <div class="warning-msg">{{ NickNameMessage }}</div>

      <div class="input-wrapper" >
        <input type="text" class="input-text" v-model="phone" placeholder="휴대폰번호 입력" />
        <button class="register-btn">인증번호받기</button>
      </div>

      <div class="input-wrapper  phone-wrapper">
        <input type="text" class="input-text" placeholder="인증번호 입력" />
        <button class="register-btn">인증하기</button>
      </div>

      <div id="gender-wrapper">
        <input class="selected-gender" type="radio" id="male" v-model="gender" value="male" name="male" />
        <label for="male">남성</label>
        <input class="selected-gender" type="radio" id="female" v-model="gender" value="female" name="female" />
        <label for="female">여성</label>
        <input class="selected-gender" type="radio" id="empty" v-model="gender" value="empty" name="empty" />
        <label for="empty">선택안함</label>
      </div>


      <div class="register-submit">
        <button class="register-btn" id="register-submit-btn" type="submit">가입하기</button>
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

  id: string;
  password: string;
  passwordCheck: string;
  nickName: string;
  phone: string;
  agree: boolean;
  nickNameMessage: string;
  passwordMessage: string;
  passwordCheckMessage: string;
  idMessage: string;
  gender: string;

  constructor() {
    super();
    this.id = '';
    this.password = '';
    this.passwordCheck = '';
    this.nickName = '';
    this.phone = '';
    this.agree = false;
    this.nickNameMessage = '';
    this.passwordMessage = '';
    this.passwordCheckMessage = '';
    this.idMessage = '';
    this.gender = '';
  }

  private validationId(): void {
    // 이메일 풀 주소 정규식 /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    const reg = /^[a-zA-Z0-9]*$/;
    let msg = '';
    if (!reg.test(this.id)) {
      msg = '이메일 주소를 정확히 입력해주세요.'
      this.IdMessage = msg;
      this.id = '';
    } else {
      msg = '';
      this.IdMessage = msg;
    }
  }

  async idCheck(): Promise<void> {

    const { data } = await this.axios.get('/members/readId', {
      params: {
        id: this.id,
      }
    })
    const { result } = data;
    console.log(result);
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

    if(!reg.test(this.password) && this.password.length) {
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
      const sendData: IUser.IRegisterProp = {
        nickname: this.nickName,
        password: this.password,
        id: this.id,
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
  private set IdMessage(msg: string) {
    this.idMessage = msg;
  }
  private get IdMessage() {
    return this.idMessage;
  }


}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.input-text {
  border: 1px solid #eeeeee;
  background: #f5f5f5;
  height: 40px;
  width: 75%;
  padding-left: 10px;
}

#member-register-wrapper {
  height: 90%;
}
#member-register-form {
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 2em;
}

.register-btn {
  border: 1px solid #b2b2b2;
  border-radius: 3px;
  box-shadow: 1px 1px 1px #b2b2b2;
  color: #eeeeee;
  background: #222222;
  font-size: 8px;
  height: 30px;
  width: 90px;
  padding: 6px 6px 6px 6px;
}

.register-submit {
  width: 100%;
}
#register-submit-btn {
  width: 100%;
  height: 35px;
}

.register-btn:hover {
  cursor: pointer;
  background: #05152f;
}

.warning-msg {
  padding: 5px 0;
  display: block;
  font-size: 7px;
  color: red;
  min-height: 23px;
  max-height: 23px;
  width: 51.2em;
  text-align: left;
}

.phone-wrapper {
  margin-top: 5px;
}
#gender-wrapper {
  margin: 10px 0;
}
</style>