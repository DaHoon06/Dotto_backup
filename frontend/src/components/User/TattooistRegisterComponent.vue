<template>
  <section>
    <div class="container-fluid bg-white rounded">
      <b-row align-h="center">
        <b-col cols="6">
          <b-form-input
              @blur="validationEmail"
              type="text"
              v-model="email"
              placeholder="이메일" />
        </b-col>
        <b-col cols="3">
          <div>
            <b-form-select
                v-model="domain"
                :options="emailList"
                class="mt-1"
                size="sm" />
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
          <b-form-input
              class="mt-2"
              type="password"
              @change="validationPassword"
              v-model="password"
              placeholder="비밀번호" />
        </div>
      </b-row>
      <b-row align-h="center">
        <div class="col-12">
          <div class="mt-2 warning-msg">{{ this.PasswordMessage }}</div>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12">
          <b-form-input
              type="password"
              class="mt-2"
              @change="validationPassword"
              v-model="passwordCheck"
              placeholder="비밀번호 확인" />
        </div>
        <div class="col-12">
          <div class="mt-2 warning-msg">{{ this.PasswordCheckMessage }}</div>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-9">
          <b-form-input
              class="mt-1"
              type="text"
              @focus="msgClear"
              v-model="nickName"
              placeholder="닉네임" />
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
          <b-form-input class="mt-2" v-model="address" readonly placeholder="작업실 주소를 검색해주세요." />
        </div>
        <div class="col-3">
          <b-button v-b-modal.modal-1 class="mt-2 register-btn">주소찾기</b-button>
          <div>
            <b-modal id="modal-1" hide-footer>
              <template #modal-title>
                주소 검색
                <b-spinner class="mb-1" small />
              </template>
              <vue-daum-postcode @complete="oncomplete" />
            </b-modal>
          </div>
        </div>
      </b-row>
      <b-row>
        <div class="col-12">
          <b-form-input class="mt-1" v-model="detail_address" placeholder="작업실 상세주소를 입력해주세요." />
        </div>
      </b-row>

      <b-row>
        <div class="col-4">
          <b-button class="mt-2 register-btn">작업실 및 소개 이미지 등록</b-button>
        </div>
        <div class="col-8">
          <b-form-file id="file-small" class="mt-2" placeholder="TEST" v-model="tattooSpot" size="sm"></b-form-file>
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
          <b-form-input class="mt-1" type="text" placeholder="인증번호입력" />
        </div>
        <div class="col-3">
          <b-button class="mt-1 register-btn">인증하기</b-button>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12 mt-2">
          <input class="selected-gender ml-1" type="radio" id="male" v-model="gender" value="male" name="male" />
          <label for="male">남성</label>
          <input class="selected-gender" type="radio" id="female" v-model="gender" value="female" name="female" />
          <label for="female">여성</label>
          <input class="selected-gender" type="radio" id="empty" v-model="gender" value="empty" name="empty" />
          <label for="empty">선택안함</label>
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12">
          <input class="mt-3" type="checkbox" v-model="agree"> 이용약관 및 개인정보 처리 방침에 동의합니다.
        </div>
      </b-row>

      <b-row align-h="center">
        <div class="col-12">
          <b-button class="mt-3 register-btn" id="register-submit" type="button" @click="register">가입하기</b-button>
        </div>
      </b-row>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import { IUser } from "@/interfaces/IUser";
import { VueDaumPostcode } from "vue-daum-postcode";

@Component({
  components: {
    VueDaumPostcode
  }
})
export default class TattooistRegisterComponent extends Vue {
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
  address: string;
  detail_address:string;
  gender: string;
  tattooSpot: string;

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.passwordCheck = '';
    this.nickName = '';
    this.phone = '';
    this.tattooSpot = '';
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

  async emailCheck(): Promise<void> {
    const { data } = await this.axios.get('/members/readEmail', {
      params: {
        email: this.email,
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

    if (!reg.test(this.password)) {
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

  validationEmail(): void {
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

  joinEmail(): void{
    this.concatEmail = this.email.concat('@').concat(this.domain);
  }

  async register(): Promise<void> {
    if (this.agree) {
      this.joinEmail();
      const sendData: IUser.ITattoist = {
        nickname: this.nickName,
        password: this.password,
        email: this.concatEmail,
        phone: this.phone,
        gender: this.gender,
        addr: this.address,
        subAddr: this.detail_address,
      };
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