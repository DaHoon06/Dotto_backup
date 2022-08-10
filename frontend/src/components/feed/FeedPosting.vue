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
        <section id="feed-body-top-container">
          <h1 id="feed-title">피드 작성</h1>
          <button type="button" id="feed-posting-btn">게시</button>
        </section>
        <section id="feed-body-items-container">
          <section id="feed-post-upload-wrapper">
            <span><img src="@/assets/icons/myfeed/upload.svg" alt="파일업로드"></span>
            <h6 id="upload-description">드래그하거나 클릭하여 업로드</h6>
          </section>
          <section id="feed-post-info">
            <p><span>프로필 이미지</span><span>닉네임</span></p>
            <textarea placeholder="내용을 입력해 주세요..." id="textarea" v-model="feedContent" @keyup="contentLengthCheck"></textarea>
            <p id="feed-content-size">{{feedContent.length}} / 1,000</p>
          </section>
        </section>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";

@Component
export default class FeedPosting extends Vue {
  feedContent = '';
  contentSize = this.feedContent.length;
  private historyBack() {
    this.$router.go(-1);
  }

  @Watch('feedContent')
  private contentLengthCheck() {
    if (this.feedContent.length >= 1000) {
      alert('놉ㅡㅡ');
      return false;
    }
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

#feed-body-top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 112px;
  height: 100vh;
}
#feed-title {
  font-size: 24px;
  margin-left: 40px;
}
#feed-posting-btn {
  color: #BDBDBD;
  background: #F5F5F5;
  border-radius: 50px;
  width: 100px;
  padding: 12px;
  margin-right: 40px;
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

#feed-post-info {
  width: 560px;
  height: 540px;
}

#history-back-button {
  border: 1px solid #e2e2e2;
  background: white;
  border-radius: 50%;
  box-shadow: 0 3px 3px 0 gray;
  width: 56px;
  height: 56px;
  margin-right: 32px;
}
#history-back-button > img {
  width: 24px;
  padding-bottom: 2px;
}

#textarea {
  border: none;
  resize: none;
  width: 528px;
  height: 419px;
  font-size: 16px;
  color: #919191;
}
#feed-content-size {
  display: flex;
  justify-content: flex-end;
  color: #BDBDBD;
  font-size: 16px;
}
</style>
