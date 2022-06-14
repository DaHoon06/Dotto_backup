<template>
  <section class="right-side">
    <router-link class="right-side-btn" to="/dotto/board/post">
      <h5 class="follow-more">+</h5>
    </router-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DottoPostingButton extends Vue {

}
</script>

<style scoped>
/* topScrolbutton과 공용 */
.right-side-btn {
  width: 56px;
  height: 56px;
  border: 1px solid #b9b9b9;
  border-radius: 45px;
  background: #FFFFFF;
}
.right-side {
  margin-top: 10px;
}

</style>