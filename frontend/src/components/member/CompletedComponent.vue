<template>
  <section id="complete_container">
    <article>
      <img id="complete_img" src="@/assets/icons/regist_complete.png" alt="congratulation">
      <h5>회원가입이 완료되었습니다.!</h5>
    </article>


    <article>
      <button class="register-common-btn" type="button" @click="redirectHome">메인으로</button>
      <button class="register-common-btn" type="button">로그인</button>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class CompletedComponent extends Vue {

  @Emit('redirectHome')
  private redirectHome(): string {
    return '/dotto';
  }
}
</script>

<style scoped>
#complete_container {

}

#complete_img {
  width: 80px;
  height: 80px;
}
</style>