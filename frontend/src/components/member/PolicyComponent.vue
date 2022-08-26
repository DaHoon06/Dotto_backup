<template>
  <article id="policy-container">
    <section class="policy-items">
      <input
        type="checkbox"
        id="check"
        @change="[handleClickAllCheckBox(), btnActive()]"
        v-model="allCheckItems"
      />
      <label for="check" class="c-mr-8"></label>
      <section id="policy-title" class="policy-title">
        전체 동의 합니다.
      </section>
    </section>

    <hr class="c-mt-12" />

    <section class="policy-items">
      <input
        type="checkbox"
        id="check1"
        @change="[handleClickEachCheckBox(), btnActive()]"
        v-model="checkList1"
      />
      <label for="check1" class="c-mr-8"></label>
      <section class="policy-title">
        <h6>이용약관 동의<span class="necessary">(필수)</span></h6>
        <img
          @click="showDottoPolicyContent"
          class="policy-drop-list-btn"
          src="@/assets/icons/nav/filter-btn.svg"
          alt="sort"
        />
      </section>
    </section>

    <hr class="c-mt-16" />

    <transition>
      <section
        v-show="showDottoPolicy"
        class="policy-text"
        v-html="terms.dottoPolicyContent"
      ></section>
    </transition>

    <section class="policy-items c-mt-16">
      <input
        type="checkbox"
        id="check2"
        @change="[handleClickEachCheckBox(), btnActive()]"
        v-model="checkList2"
      />
      <label for="check2" class="c-mr-8"></label>
      <section class="policy-title">
        <h6>개인정보 수집 . 이용동의<span class="necessary">(필수)</span></h6>
        <img
          @click="showPrivatePolicyContent"
          class="policy-drop-list-btn"
          src="@/assets/icons/nav/filter-btn.svg"
          alt="sort"
        />
      </section>
    </section>

    <hr class="c-mt-16" />

    <transition>
      <section
        v-show="showPrivatePolicy"
        class="policy-text"
        v-html="terms.privatePolicyContent"
      ></section>
    </transition>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import termsContent from "@/assets/dummy/terms.ts";
import EventBus from "@/utils/eventBus";

@Component
export default class PolicyComponent extends Vue {
  allCheckItems = false;
  checkList1 = false;
  checkList2 = false;

  showDottoPolicy = false;
  showPrivatePolicy = false;

  terms = {
    dottoPolicyContent: "",
    privatePolicyContent: "",
  };

  constructor() {
    super();
    this.terms = {
      dottoPolicyContent: termsContent[0].dottoPolicyContent,
      privatePolicyContent: termsContent[0].privatePolicyContent,
    };
  }

  created(): void {
    this.init();
    this.handleClickAllCheckBox();
  }

  private async init() {
    try {
      const { data: policyData } = await this.axios.get("/policy");
      const { result } = policyData;
      const { data } = result;
      const { dottoPolicyContent, privatePolicyContent } = data;
      this.terms.dottoPolicyContent = dottoPolicyContent;
      this.terms.privatePolicyContent = privatePolicyContent;
    } catch (e) {
      console.log(e);
    }
  }

  private handleClickAllCheckBox() {
    if (this.allCheckItems) {
      this.checkList1 = true;
      this.checkList2 = true;
    } else {
      this.checkList1 = false;
      this.checkList2 = false;
    }
  }

  private btnActive() {
    // 전체 동의일 경우 다음 버튼 활성화
    EventBus.$emit("next", this.checkList1 && this.checkList2);
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
  flex-direction: column;
  max-height: 839px;
  height: 67%;
  margin: 44px 40px;
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
  height: 170px;
  overflow-y: auto;
  background: #efefef;
  font-size: 12px;
}

.necessary {
  color: #919191;
  font-size: 12px;
}

input {
  display: none;
}
input + label {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid #dedede;
  cursor: pointer;
  border-radius: 100%;
}
input + label::after {
  content: "✓";
  font-weight: 600;
  color: #dedede;
  font-size: 12px;
  position: relative;
  left: 1px;
  bottom: 5px;
}
input:checked + label::after {
  content: "✓";
  font-weight: 1000;
  color: #1dbe0f;
  font-size: 13px;
  position: relative;
  bottom: 5px;
}
input:checked + label {
  border: 2px solid #1dbe0f;
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
