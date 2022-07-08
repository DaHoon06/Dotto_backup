<template>
  <article id="policy-container">

    <article>
      <section class="policy-items">
        <input type="checkbox" id="check" @change="[handleClickAllCheckBox(), btnActive()]" v-model="allCheckItems" />
        <label for="check"></label>
        <section id="policy-title" class="policy-title">전체 동의 합니다.</section>
      </section>
      <hr class="under-line">
    </article>

    <article >
      <section class="policy-items">
        <input type="checkbox" id="check1" @change="[handleClickEachCheckBox(), btnActive()]" v-model="checkList1" />
        <label for="check1"></label>
        <section class="policy-title">
          <h6>이용약관 동의<span class="necessary">(필수)</span></h6>
          <img @click="showDottoPolicyContent" class="policy-drop-list-btn" src="@/assets/icons/nav/filter-btn.svg" alt="sort" />
        </section>
      </section>
      <hr class="under-line">
      <transition name="fade">
        <section v-show="showDottoPolicy" class="policy-text" v-html="terms.dottoPolicyContent"></section>
      </transition>
    </article>

    <article id="policy-private-container">
      <section class="policy-items">
        <input type="checkbox" id="check2" @change="[handleClickEachCheckBox(), btnActive()]" v-model="checkList2" />
        <label for="check2"></label>
        <section class="policy-title">
          <h6>개인정보 수집 . 이용동의<span class="necessary">(필수)</span></h6>
          <img @click="showPrivatePolicyContent" class="policy-drop-list-btn" src="@/assets/icons/nav/filter-btn.svg" alt="sort" />
        </section>
      </section>
      <hr class="under-line">
      <transition name="fade">
        <section v-show="showPrivatePolicy" class="policy-text" v-html="terms.privatePolicyContent"></section>
      </transition>
    </article>

  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import termsContent from '@/assets/dummy/terms.ts';

@Component
export default class PolicyComponent extends Vue {
  allCheckItems = false;
  checkList1 = false;
  checkList2 = false;

  showDottoPolicy = false;
  showPrivatePolicy = false;

  next = false;
  openBtn = true;

  terms = {
    dottoPolicyContent: '',
    privatePolicyContent: '',
  }

  constructor() {
    super();
    this.terms = {
      dottoPolicyContent: termsContent[0].dottoPolicyContent,
      privatePolicyContent: termsContent[0].privatePolicyContent,
    }
  }

  created(): void {
    this.handleClickAllCheckBox();
  }

  private handleClickAllCheckBox() {
    if (this.allCheckItems) {
      console.log('??????')
      this.checkList1 = true;
      this.checkList2 = true;
      this.$store.commit('utilsStore/next', true);
    } else {
      this.checkList1 = false;
      this.checkList2 = false;
    }
  }

  private btnActive() {
    // 전체 동의일 경우 다음 버튼 활성화
    this.$store.commit('utilsStore/next', true);
    this.openBtn = !(this.checkList1 && this.checkList2);
  }

  private handleClickEachCheckBox() {
    this.allCheckItems = this.checkList1 && this.checkList2;
  }

  private showDottoPolicyContent(): void {
    this.showDottoPolicy = !this.showDottoPolicy;
  }

  private showPrivatePolicyContent(): void {
    this.showPrivatePolicy = !this.showPrivatePolicy;
  }

}
</script>

<style scoped>
#policy-container {
  display: flex;
  overflow-y: auto;
  justify-content: space-between;
  flex-direction: column;
}
#policy-container section {
}

#policy-title {
  text-align: left;
  font-size: 15px;
  font-weight: 600;
}
.policy-title {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 24px 0 0;
}
.policy-items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.policy-items div:nth-child(1) {
  font-size: 14px;
  font-weight: 600;
}

.policy-text {
  text-align: left;
  border: 1px solid #eeeeee;
  height: 100px;
  overflow-y: auto;
  background: #efefef;
  font-size: 12px;
}
/* 약관 영역 */
/* 개인정보 수집 이용동의 */
#policy-private-container {
  margin-top: 12px;
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

.under-line {
  width: 100%;
  margin: 12px 0;
}

/* 버튼 */
#policy-btn-container {

}

.policy-drop-list-btn {
  width: 14px;
  height: 14px;
}


.side-menu-drop-btn-02 {
  width: 18px;
  height: 10px;
  margin-left: 194px;
}
.policy-drop-list-btn:hover {
  cursor: pointer;
}
</style>