<template>
  <article id="banner-container">

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
  width: 100vw;
  height: 10em;
}
</style>