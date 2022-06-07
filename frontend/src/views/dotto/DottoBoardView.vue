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
  height: 100vh;
  background: #f6f6f6;

}
</style>