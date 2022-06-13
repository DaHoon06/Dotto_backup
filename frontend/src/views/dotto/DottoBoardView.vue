<template>
  <div id="dotto-board-container" :class="dottoBoardBackground">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DottoComponent } from "@/components/dotto";

@Component({
  components: {
    DottoComponent
  }
})
export default class DottoBoardView extends Vue {
  dottoBoardBackground = '';
}
</script>

<style scoped>
#dotto-board-container {
  margin-top: 100px;
  height: 100%;
  min-height: 800px;
  background: #f6f6f6;
}
</style>