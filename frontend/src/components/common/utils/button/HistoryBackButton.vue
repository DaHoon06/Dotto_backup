<template>
  <button class="history-back-button" type="button" @click="historyBack">
    <img src="@/assets/icons/myfeed/history-back.svg" alt="뒤로가기" />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HistoryBackButton extends Vue {
  private historyBack() {
    this.$router.go(-1);
  }
}
</script>

<style scoped>
.history-back-button {
  border: 1px solid #e2e2e2;
  background: white;
  border-radius: 50%;
  box-shadow: 0 3px 3px 0 gray;
  width: 56px;
  height: 56px;
  margin-right: 32px;
}
.history-back-button > img {
  width: 24px;
  padding-bottom: 2px;
}
</style>
