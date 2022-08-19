<template>
  <main id="estimate-container">
    <nav class="estimate-top">
      <section class="estimate-top-button-container">
        <button class="preview-btn common-btn" :disabled="previewBtn">
          미리보기
        </button>
        <button
          class="request-btn common-btn"
          :class="buttonEnabled ? '' : 'enabled'"
          :disabled="buttonEnabled"
          @click="sendEstimateSheet"
        >
          의뢰하기
        </button>
      </section>
    </nav>
    <section class="history-btn-wrapper">
      <history-back-button />
    </section>
    <estimate-sheet @enabledSubmitButton="enabledButton" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EstimateSheet from "@/components/dotto/form/EstimateSheet.vue";
import EventBus from "@/utils/eventBus";
import HistoryBackButton from "@/components/common/utils/button/HistoryBackButton.vue";
import { IBoard } from "@/interfaces/IBoard";

@Component({
  components: {
    EstimateSheet,
    HistoryBackButton,
  },
})
export default class EstimateView extends Vue {
  previewBtn = true;
  submitBtn = true;

  sheetData: any = [];

  created(): void {
    this.changeTop(true);
  }

  sendEstimateSheet() {
    console.log("보낸다.");
  }
  // css 활성화
  enabledButton(formData: IBoard.EstimateSheet) {
    const { result, data } = formData;
    this.buttonEnabled = result;
    if (!result) this.sheetData = data;
  }
  private get buttonEnabled() {
    return this.submitBtn;
  }
  private set buttonEnabled(type: boolean) {
    this.submitBtn = type;
  }
  // 컴포넌트를 닫을 경우 다시 일반 메뉴 화면 보이도록
  destroyed(): void {
    this.changeTop(false);
  }

  private changeTop(type: boolean): void {
    EventBus.$emit("topMenuHide", type);
  }
}
</script>

<style scoped>
#estimate-container {
  background: #f5f5f5;
}
.estimate-top {
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 10;
}

.estimate-top-button-container {
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
}

.common-btn {
  max-width: 127px;
  width: 100%;
  height: 48px;
  border-radius: 40px;
  color: #bdbdbd;
  font-size: 18px;
}
.preview-btn {
  border: 1px solid #bdbdbd;
  background: white;
}
.request-btn {
  border: none;
  background: #f5f5f5;
  margin-left: 24px;
}
.history-btn-wrapper {
  position: fixed;
  top: 10%;
  left: 12%;
}

/* 버튼 활성화 */
.enabled {
  background: #222222;
  color: white;
}
</style>
