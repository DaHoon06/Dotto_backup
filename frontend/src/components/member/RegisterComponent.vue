<template>
  <article id="register-form-container">
    <form id="member-register-form" @submit.prevent="register">
      <section class="input-wrapper">
        <label class="label">아이디</label>
        <input
          @keydown.enter.prevent
          @blur="validationId"
          @change="btnActive"
          type="text"
          v-model="id"
          class="input-text"
          ref="refId"
          tabindex="10"
          placeholder="6자이상의 영문 혹은 명문과 숫자 조합"
        />
        <button class="register-btn" @click="idCheck" type="button">
          중복확인
        </button>
      </section>

      <p class="warning-msg">{{ IdMessage }}</p>

      <section class="input-wrapper">
        <label class="label">비밀번호</label>
        <input
          @keydown.enter.prevent
          type="password"
          autocomplete="off"
          @change="[validationPassword(), btnActive()]"
          v-model="password"
          class="input-text"
          ref="refPassword"
          tabindex="10"
          placeholder="비밀번호를 입력해 주세요."
        />
        <div class="label-division"></div>
      </section>
      <p class="warning-msg">{{ PasswordMessage }}</p>

      <section class="input-wrapper">
        <label class="label">비밀번호 확인</label>
        <input
          @keydown.enter.prevent
          type="password"
          autocomplete="off"
          @change="[validationPassword(), btnActive()]"
          v-model="passwordCheck"
          class="input-text"
          tabindex="10"
          placeholder="비밀번호를 한번 더 입력해 주세요."
        />
        <div class="label-division"></div>
      </section>
      <p class="warning-msg">{{ PasswordCheckMessage }}</p>

      <section class="input-wrapper">
        <label class="label">닉네임</label>
        <input
          @keydown.enter.prevent
          type="text"
          @focus="msgClear"
          @change="btnActive"
          v-model="nickname"
          class="input-text"
          ref="refNickName"
          tabindex="10"
          placeholder="닉네임을 입력해 주세요."
        />
        <button @click="validationNickName" class="register-btn" type="button">
          중복확인
        </button>
      </section>
      <p class="warning-msg">{{ NickNameMessage }}</p>

      <section class="input-wrapper">
        <div class="label-division"></div>
        <input
          @keydown.enter.prevent
          @keydown="validationPhoneNumber"
          @change="btnActive"
          type="number"
          maxlength="11"
          class="input-text"
          v-model="phone"
          placeholder="숫자만 입력해 주세요."
          ref="refPhone"
          tabindex="10"
        />
        <button class="register-btn">인증번호받기</button>
      </section>
      <p class="warning-msg">{{ PhoneMessage }}</p>

      <section class="input-wrapper">
        <div class="label-division"></div>
        <input
          @keydown.enter.prevent
          type="text"
          class="input-text"
          placeholder="인증번호 입력"
          tabindex="10"
        />
        <button class="register-btn">인증하기</button>
      </section>

      <section id="gender-wrapper">
        <label class="label">성별</label>
        <div id="gender-radio-group">
          <input
            @keydown.enter.prevent
            class="selected-gender"
            @change="btnActive"
            type="radio"
            id="male"
            v-model="gender"
            value="male"
            name="male"
          />
          <label for="male">남성</label>
          <input
            @keydown.enter.prevent
            class="selected-gender"
            @change="btnActive"
            type="radio"
            id="female"
            v-model="gender"
            value="female"
            name="female"
          />
          <label for="female">여성</label>
        </div>
        <div class="label-division"></div>
      </section>
    </form>
  </article>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";
import { EMessageRegister } from "@/interfaces/common/EMessageType";

@Component
export default class MemberRegisterComponent extends Vue {
  @Prop() type?: string;

  @Ref() readonly refId!: HTMLElement;
  @Ref() readonly refPassword!: HTMLElement;
  @Ref() readonly refNickName!: HTMLElement;
  @Ref() readonly refPhone!: HTMLElement;

  id = "";
  password = "";
  passwordCheck = "";
  nickname = "";
  phone = "";
  idVerification = false;
  nicknameVerification = false;

  authentication = true;
  // ERROR MSG
  nickNameMessage = "";
  passwordMessage = "";
  passwordCheckMessage = "";
  idMessage = "";
  phoneMessage = "";
  gender = "";
  openBtn = true;

  constructor() {
    super();
  }

  private btnActive() {
    this.openBtn = !(
      this.id.length &&
      this.phone.length === 11 &&
      this.password === this.passwordCheck &&
      this.nickname.length &&
      this.authentication &&
      this.gender.length
    );
  }

  private validationId(): void {
    const reg = /^[a-z0-9_]{4,20}$/;

    if (!reg.test(this.id)) {
      this.IdMessage = EMessageRegister.ID_NOT_ENTERED;
      this.id = "";
    } else {
      this.IdMessage = EMessageRegister.BLANK;
    }
  }

  async idCheck(): Promise<void> {
    const { data } = await this.axios.get(`/members/existsbyid/${this.id}`);
    const { success, result } = data;
    const { data: idCheck } = result;
    // true: 이미 존재
    if (!idCheck) {
      this.IdMessage = EMessageRegister.AVAILABLE_ID;
      this.idVerification = true;
    } else {
      this.IdMessage = EMessageRegister.EXIST_ID;
      this.idVerification = false;
    }
  }

  async nickNameCheck(): Promise<void> {
    const { data } = await this.axios.get(
      `/members/existsbynickname/${this.nickname}`
    );
    const { success, result } = data;
    const { data: nickNameCheck } = result;
    // true: 이미 존재
    if (!nickNameCheck) {
      this.NickNameMessage = EMessageRegister.AVAILABLE_NICKNAME;
      this.nicknameVerification = true;
    } else {
      this.NickNameMessage = EMessageRegister.EXIST_NICKNAME;
      this.nicknameVerification = false;
    }
  }

  validationNickName(): void {
    const reg = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
    if (reg.test(this.nickname)) {
      this.NickNameMessage = EMessageRegister.SPECIAL_CHARACTERS_NOT_ALLOWED;
    } else {
      this.NickNameMessage = EMessageRegister.BLANK;
      this.nickNameCheck();
    }
  }

  validationPhoneNumber(): void {
    const reg = /^01([016789])-?([0-9]{3})-?([0-9]{4})$/;
    if (reg.test(this.phone)) {
      this.PhoneMessage = EMessageRegister.BLANK;
    } else {
      if (this.phone.length === 10) {
        this.PhoneMessage = EMessageRegister.BLANK;
      } else {
        this.PhoneMessage = EMessageRegister.PHONE_NOT_ENTERED;
        this.openBtn = true;
      }
    }
  }

  validationPassword(): void {
    const reg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!reg.test(this.password) && this.password.length)
      this.PasswordMessage = EMessageRegister.PASSWORD_NOT_ENTERED;
    else this.PasswordMessage = EMessageRegister.BLANK;

    if (this.password !== this.passwordCheck)
      this.PasswordCheckMessage = EMessageRegister.PASSWORD_RECHECK;
    else this.PasswordCheckMessage = EMessageRegister.BLANK;
  }

  private blankCheck(): boolean {
    let result = false;
    if (!this.id.length) {
      this.$nextTick(() => this.refId.focus());
    } else if (!this.password.length) {
      this.$nextTick(() => this.refPassword.focus());
    } else if (!this.nickname.length) {
      this.$nextTick(() => this.refNickName.focus());
      return false;
    } else if (!this.phone.length) {
      this.$nextTick(() => this.refPhone.focus());
      return false;
    } else {
      result = true;
    }
    return result;
  }

  async register(): Promise<void> {
    const result = this.blankCheck();
    //TODO: 휴대폰 인증에 관한 처리
    if (
      result &&
      this.authentication &&
      this.idVerification &&
      this.nicknameVerification
    ) {
      const sendData: IUser.IRegisterProp = {
        nickname: this.nickname,
        password: this.password,
        id: this.id,
        phone: this.phone,
        gender: this.gender,
      };

      //TODO: 반환 data에 대한 타입 정의
      const { data } = (await this.axios.post("/sign-up", sendData)) as {
        data: any;
      };
      const { success } = data;
      if (success) {
        this.changeComponent(success);
      } else {
        this.changeComponent(success);
      }
    } else {
      //TODO : 추후 수정
      alert("빈 곳이 있다는 모달 ");
    }
  }

  //TODO : 추후 수정 !success -> success 로 변경 예정
  @Emit("changeComponent")
  private changeComponent(success: boolean): string {
    if (!success) {
      return "CompletedComponent";
    } else {
      return "RegisterComponent";
    }
  }

  @Emit("prev")
  private prev(): string {
    return "PolicyComponent";
  }

  msgClear(): void {
    if (this.NickNameMessage !== EMessageRegister.AVAILABLE_NICKNAME) {
      this.NickNameMessage = EMessageRegister.BLANK;
      this.nickname = "";
    }
  }

  private set NickNameMessage(msg: string) {
    this.nickNameMessage = msg;
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
  private set PhoneMessage(msg: string) {
    this.phoneMessage = msg;
  }
  private get PhoneMessage() {
    return this.phoneMessage;
  }
}
</script>

<style scoped>
#register-form-container {
  display: flex;
  justify-content: flex-start;
}

#member-register-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Wrapper */
#gender-wrapper {
  display: flex;
}
#gender-radio-group {
  height: 52px;
  width: 344px;
}
.register-submit {
  margin-top: 20px;
  width: 100%;
}

select::-ms-expand {
  display: none;
}
.select {
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 150px;
  height: 35px;
  background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png")
    calc(100% - 5px) center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
}

.select option {
  background: black;
  color: #fff;
  padding: 3px 0;
}

.label {
  font-size: 14px;
  height: 52px;
  width: 120px;
}
.label-division {
  height: 52px;
  width: 120px;
}
/* 회원가입 버튼 */
.register-btn {
  border: 1px solid #222222;
  border-radius: 4px;
  box-shadow: 1px 1px 1px #b2b2b2;
  color: #222222;
  font-weight: bold;
  background: #ffffff;
  font-size: 14px;
  height: 52px;
  width: 120px;
  padding: 6px 6px 6px 6px;
}

/* 회원가입 input */
.input-text {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  color: #bdbdbd;
  outline: none;
  background: #ffffff;
  height: 52px;
  width: 344px;
  padding-left: 10px;
}

/* 경고 메세지 */
.warning-msg {
  padding: 5px 0;
  display: block;
  font-size: 11px;
  color: red;
  min-height: 23px;
  max-height: 23px;
  text-align: left;
}
</style>
