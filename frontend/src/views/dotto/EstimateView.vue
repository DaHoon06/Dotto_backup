<template>
  <main id="estimate-container">
    <nav class="estimate-top">
      <section class="estimate-top-button-container">
        <button>미리보기</button>
        <button>의뢰하기</button>
      </section>
    </nav>
    <estimate-sheet />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EstimateSheet from "@/components/dotto/form/EstimateSheet.vue";

@Component({
  components: {
    EstimateSheet,
  },
})
export default class EstimateView extends Vue {
  created(): void {
    this.changeTop();
  }

  private changeTop(): void {
    this.$store.commit("cssStore/topMenuHide", true);
  }
}
</script>

<style scoped>
#estimate-container {
  background: #f5f5f5;
}
.estimate-top {
  display: flex;
  max-width: 1920px;
  width: 100vw;
  height: 80px;
}

.estimate-top-button-container {
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
}
</style>
