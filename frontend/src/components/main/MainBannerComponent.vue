<template>
  <article id="banner-container">
    <img src="@/assets/icons/main/sample/sample_banner.png" alt="banner" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MainBannerComponent extends Vue {

}
</script>

<style scoped>
#banner-container {
  margin-top: 100px;
  background: #222222;
  width: 100%;
}

#banner-container > img {
  width: 100%;
  height: 100%;
}
</style>