<template>
  <section >
    <router-link to="/dotto/board/view">임시 상세보기</router-link>
    <router-link to="/dotto/board/post">
      <img id='posting-btn-img' src="@/assets/icons/board/dotto/plus.png" alt="posting" />
    </router-link>
  </section>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";

@Component
export default class DottoPostingButton extends Vue {
}
</script>

<style scoped>
#posting-btn-img {
  width: 56px;
  height: 56px;
}
</style>