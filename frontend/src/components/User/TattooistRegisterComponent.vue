<template>
  <section id="tattooist-register-wrapper">

    <form id="tattooist-register-from" @submit.prevent="register">
      <div class="input-wrapper">
        <input
            @blur="validationId"
            type="text"
            v-model="id"
            placeholder="아이디"
            class="input-text"/>
        <button class="register-btn input-text" @click="idCheck" type="button">중복확인</button>
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
        <b-button @click="nickNameCheck" class="register-btn" type="button">중복확인</b-button>
      </div>
      <div class="warning-msg">{{ NickNameMessage }}</div>

      <div class="input-wrapper">
        <input v-model="address" class="input-text" readonly placeholder="작업실 주소를 검색해주세요." />
        <b-button v-b-modal.modal-1 class="register-btn input-text">주소찾기</b-button>
      </div>

      <b-modal id="modal-1" hide-footer>
        <template #modal-title>
          주소 검색
        </template>
        <vue-daum-postcode @complete="oncomplete" />
      </b-modal>

      <div class="address_detail">
        <input class="input-text address_detail" v-model="detail_address" placeholder="작업실 상세주소를 입력해주세요." />
      </div>

      <div class="input-wrapper register-submit">
        <button type="button" class="register-btn" id="img-registration-btn">작업실 및 소개 이미지 등록</button>
      </div>
      <div>
        <b-form-file id="file-small" v-model="tattooSpot" size="sm"></b-form-file>
      </div>

      <div class="input-wrapper phone-wrapper" id="first-phone-wrapper">
        <input class="input-text" type="text" v-model="phone" placeholder="휴대폰번호 입력" />
        <button class="register-btn">인증번호받기</button>
      </div>

      <div class="input-wrapper phone-wrapper">
        <input class="input-text" type="text" placeholder="인증번호입력" />
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
import { Component, Vue } from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";
import { VueDaumPostcode } from "vue-daum-postcode";

@Component({
  components: {
    VueDaumPostcode
  }
})
export default class TattooistRegisterComponent extends Vue {
  id: string;
  password: string;
  passwordCheck: string;
  nickName: string;
  phone: string;
  nickNameMessage: string;
  passwordMessage: string;
  passwordCheckMessage: string;
  idMessage: string;
  address: string;
  detail_address:string;
  gender: string;
  tattooSpot: string[];

  constructor() {
    super();
    this.id = '';
    this.password = '';
    this.passwordCheck = '';
    this.nickName = '';
    this.phone = '';
    this.tattooSpot = [];
    this.nickNameMessage = '';
    this.passwordMessage = '';
    this.passwordCheckMessage = '';
    this.idMessage = '';
    this.address = '';
    this.detail_address = '';
    this.gender = '';
  }

  private oncomplete(result: any) {
    // address => 전체 주소 ( 도로명 ) jibunAddress => 지번 주소 roadAddress 도로명 주소
    if(result.userSelectedType === 'R'){  // 도로명 주소 선택
      this.address = result.roadAddress;
      this.$bvModal.hide('modal-1')
    } else {  // 지번 주소 선택
      this.address = result.jibunAddress;
      this.$bvModal.hide('modal-1')
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

    if(result) {
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

    if (!reg.test(this.password) && this.password.length) {
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
  //TODO: 정규식 아이디로 변경
  validationId(): void {
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

  //TODO: 공백 체크
  async register(): Promise<void> {
    const sendData: IUser.ITattoist = {
      nickname: this.nickName,
      password: this.password,
      id: this.id,
      phone: this.phone,
      gender: this.gender,
      addr: this.address,
      subAddr: this.detail_address,
    }
    const { data } = await this.axios.post('/sign-up', sendData) as { data: any };
    const { success } = data;

    if (success) {
      await this.$router.push({
        path: '/login'
      })
    } else {
      alert('ERROR');
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
@import "./assets/styles/registerForm.css";

.input-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.input-wrapper:last-child {
  margin-top: 10px;
}

.address_detail {
  width: 100%;
  margin: 2px 0 5px 0;
}

#tattooist-register-wrapper {
  height: 90%;
}

#tattooist-register-from {
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 2em;
}

#first-phone-wrapper {
  margin-top: 20px;
}


#img-registration-btn {
  width: 100%;
}
</style>