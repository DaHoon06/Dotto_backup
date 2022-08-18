<template>
  <aside class="categories-container">
    <ul>
      <li class="categories-title active">통합</li>
      <li class="categories-title c-mt-16">닷투</li>
      <li class="categories-title c-mt-16">닷찾사</li>
      <li class="categories-title c-mt-16">아티스트</li>
      <li class="categories-title c-mt-16">회원</li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchCategories extends Vue {}
</script>

<style scoped>
.categories-container {
  position: fixed;
  left: 48px;
  top: 184px;
  width: 280px;
  height: 296px;
}
/* 변수에 바인딩 필요!!!!! */
.active {
  color: #222222 !important;
  font-weight: 600;
}
.categories-title {
  color: #919191;
  font-size: 20px;
}
</style>
