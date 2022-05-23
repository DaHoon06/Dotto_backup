<template>
  <div id="terms-container">

    <section>
      <div class="terms-items">
        <div id="terms-title">이용약관, 개인정보 수집 및 이용,<br/> 위치정보 이용약관(선택), 프로모션 안내,<br/> 메일 수신(선택)에 모두 동의 합니다.</div>
        <div><input type="checkbox" id="check1" @click="handleClickAllCheckBox" v-model="allCheckItems" /><label for="check1"></label></div>
      </div>
      <hr/>
    </section>

    <section >
      <div class="terms-items">
        <div>닷투 이용약관 동의<span class="necessary">(필수)</span></div>
        <div><input type="checkbox" id="check2" v-model="checkList1" /><label for="check2"></label></div>
      </div>
      <div class="terms-text">제 1조 (목적)개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내개인정보 수집 및 이용에 대한 안내</div>
    </section>

    <section >
      <div class="terms-items">
        <div>개인정보 수집 및 이용에 대한 안내<span class="necessary">(필수)</span></div>
        <div><input type="checkbox" id="check3" v-model="checkList2" /><label for="check3"></label></div>
      </div>
      <div class="terms-text">제 1조 (목적)</div>
    </section>

    <section>
      <div class="terms-items">
        <div>위치 정보 이용약관 동의<span class="choice">(선택)</span></div>
        <div><input type="checkbox" id="check4" v-model="checkList3" /><label for="check4"></label></div>
      </div>
      <div class="terms-text">제 1조 (목적)</div>
    </section>

    <section >
      <div class="terms-items">
        <div>이벤트 등 프로모션 알람 메일 수신<span class="choice">(선택)</span></div>
        <div><input type="checkbox" id="check5" v-model="checkList4" /><label for="check5"></label></div>
      </div>
      <div class="terms-text">제 1조 (목적)</div>
    </section>

    <section id="terms-btn-wrapper" >
      <button class="terms-btn" type="button" @click="cancelRegistration">비동의</button>
      <button class="terms-btn" type="button" @click="redirectRegisterForm">동의</button>
    </section>

  </div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator";

@Component
export default class TermsComponent extends Vue {
  allCheckItems = false;
  checkList1 = false;
  checkList2 = false;
  checkList3 = false;
  checkList4 = false;

  private handleClickAllCheckBox() {
    if (!this.allCheckItems) {
      this.checkList1 = true;
      this.checkList2 = true;
      this.checkList3 = true;
      this.checkList4 = true;
    } else {
      this.checkList1 = false;
      this.checkList2 = false;
      this.checkList3 = false;
      this.checkList4 = false;
    }

  }

  private redirectRegisterForm(): void {
    if (!this.checkList1 || !this.checkList2) {
      alert('필수 선택사항을 체크해 주세요.');
      return false;
    } else {
      this.$emit('modalTypeRegister', 'RegisterForm')
    }
  }

  private checkBox() {
    this.checkItem1Computed = this.checkList1;
    this.checkItem2Computed = this.checkList2;
    this.checkItem3Computed = this.checkList3;
    this.checkItem4Computed = this.checkList4;
  }

  mounted(): void {
    this.checkBox();
  }

  private cancelRegistration(): void {
    const result = confirm('가입을 취소하시겠습니까?');
    console.log(result);
    // if (result)
  }

  private set checkItem1Computed(check: boolean) {
    this.checkList1 = check;
  }
  private get checkItem1Computed(): boolean {
    return this.checkList1;
  }

  private set checkItem2Computed(check: boolean) {
    this.checkList2 = check;
  }
  private get checkItem2Computed(): boolean {
    return this.checkList2;
  }

  private set checkItem3Computed(check: boolean) {
    this.checkList3 = check;
  }
  private get checkItem3Computed(): boolean {
    return this.checkList3;
  }

  private set checkItem4Computed(check: boolean) {
    this.checkList4 = check;
  }
  private get checkItem4Computed(): boolean {
    return this.checkList4;
  }
}
</script>

<style scoped>
#terms-container {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
}
#terms-container section {
  margin-bottom: 0.6em;
}
#terms-btn-wrapper {
  display: flex;
  justify-content: space-around;
}
#terms-title {
  text-align: left;
  font-size: 15px;
  font-weight: 600;
}
.terms-items {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.terms-items div:nth-child(1) {
  font-size: 14px;
  font-weight: 600;
}
.terms-btn {
  border: 1px solid #eeeeee;
  width: 14em;
  height: 2.5em;
  border-radius: 1px;
}
.terms-btn:nth-child(1) {
  margin-right: 1em;
}
.terms-btn:nth-child(2) {
  color: #eeeeee;
  background: #222222;
}
.terms-btn:nth-child(1):hover {
  background: #f6f6f6;
}
.terms-btn:nth-child(2):hover {
  background: #797979;
}
.terms-text {
  text-align: left;
  border: 1px solid #eeeeee;
  height: 100px;
  overflow-y: auto;
  background: #efefef;
  font-size: 12px;
}

.necessary {
  color: #229d17;
  font-size: 12px;
}
.choice {
  color: #949494;
  font-size: 12px;
}
input {
  display: none;
}
input + label {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #dedede;
  cursor: pointer;
  border-radius: 45px;
}
input + label::after {
  content: '✓';
  font-weight: 600;
  color: #dedede;
  font-size: 12px;
  position: relative;
  left: 1px;
  bottom: 5px;
}
input:checked + label::after {
  content: '✓';
  font-weight: 1000;
  color: #1dbe0f;
  font-size: 13px;
  position: relative;
  bottom: 5px;
}
input:checked + label {
  border: 2px solid #1dbe0f;
}
</style>