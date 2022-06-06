<template>
  <div id="dotto-board-container">
    <router-view></router-view>
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

}
</script>

<style scoped>
#dotto-board-container {
  margin-top: 100px;
  width: 100%;
  height: 100%;
  max-height: 1325px;
  min-height: 1325px;
  background: #f6f6f6;

}
</style>