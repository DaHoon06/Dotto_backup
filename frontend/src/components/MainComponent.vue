<template>
  <div id="main-container">
    <section>
      1. 닷투 게시판 COMPONENT 위치 전체보기 클릭시에 해당 view 페이지로 이동
      <br />
      한 화면에 8개의 게시물 출력
    </section>
    <br />
    <section>
      2. 닷찻사 게시판 COMPONENT 위치 클릭시에 해당 view 페이지로 이동
      <br />
      한 화면에 8개의 게시물 출력
    </section>
    <br />
    <section>
      3. FEED COMPONENT 위치 클릭시에 해당 view 페이지로 이동
      <br />
      한 화면에 8개의 게시물 출력
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MainComponent extends Vue {
  constructor() {
    super();
  }
}
</script>

<style scoped>
#main-container {
  width: 100%;
  margin: 100px auto 10em auto;
  max-width: 1260px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
