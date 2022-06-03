<template>
  <div id="dotto-board-main-wrapper">
    <router-link to="/dotto/board/post">게시글 작성</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DottoComponent extends Vue {

}
</script>

<style scoped>
#dotto-board-main-wrapper {

}
</style>