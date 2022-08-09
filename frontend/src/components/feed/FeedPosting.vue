<template>
  <article id="feed-post-container">
    <section id="feed-post-top">
      <img id="logo" src="@/assets/img/dotto.svg" alt="logo" />
    </section>
    <article id="feed-post-form">
      <section >
        <button id="history-back-button" type="button" @click="historyBack">
          <img src="@/assets/icons/myfeed/history-back.svg" alt="뒤로가기" />
        </button>
      </section>
      <section id="feed-post-body">
        <h1>피드 작성</h1>
        <section id="feed-body-items-container">
          <section id="feed-post-upload-wrapper">
            <span><img src="@/assets/icons/myfeed/upload.svg" alt="파일업로드"></span>
            <h6 id="upload-description">드래그하거나 클릭하여 업로드</h6>
          </section>
          <section>
            <p>유저 프로필 영역</p>
          </section>
        </section>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FeedPosting extends Vue {
  private historyBack() {
    this.$router.go(-1);
  }
}
</script>

<style scoped>
#feed-post-container {
  position: absolute;
  top: 0;
  left: 0;
  background: #E2E2E2;
  width: 100vw;
  min-height: 100vh;
  z-index: 10;
}

#feed-post-top {
  background: white;
  width: 100%;
  max-width: 1960px;
  height: 63px;
}

/* 로고 */
#logo {
  margin: 12px 24px 0 10px;
  width: 103px;
  height: 40px;
  left: 4px;
  top: 0;
}

/* 컨텐츠 입력 부분 */
#feed-post-form {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}
#feed-post-body {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background: white;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  max-height: 700px;
}
#feed-body-items-container {
  display: flex;
  justify-content: space-around;
}

/* 업로드 관련 */
#feed-post-upload-wrapper {
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  max-width: 520px;
  width: 100%;
  max-height: 520px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#upload-description {
  color: #919191;
  font-size: 16px;
  font-weight: 500;
  margin-top: 32px;
}

#history-back-button {
  border: 1px solid #e2e2e2;
  background: white;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  margin-right: 32px;
}
#history-back-button > img {
  width: 24px;
  padding-bottom: 2px;
}

</style>
