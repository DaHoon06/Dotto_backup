<template>
  <article id="feed-post-container">
    <section id="feed-post-top">
      <router-link to="/">
        <img id="logo" src="@/assets/img/dotto.svg" alt="logo" />
      </router-link>
    </section>
    <article id="feed-post-form">
      <section>
        <button id="history-back-button" type="button" @click="historyBack">
          <img src="@/assets/icons/myfeed/history-back.svg" alt="뒤로가기" />
        </button>
      </section>
      <section id="feed-post-body">
        <section id="feed-body-top-container">
          <h1 id="feed-title">피드 작성</h1>
          <button
            type="button"
            id="feed-posting-btn"
            :class="feedPosting ? disabledButton : notDisabledButton"
            :disabled="feedPosting"
            @click="posting"
          >
            게시
          </button>
        </section>
        <section id="feed-body-items-container">
          <section
            id="feed-post-upload-wrapper"
            @click="clickInputTag"
            @drop.prevent="dropInputTag($event)"
            @dragover.prevent
          >
            <img src="@/assets/icons/myfeed/upload.svg" alt="파일업로드" />
            <h2 id="upload-description">드래그하거나 클릭하여 업로드</h2>
            <input
              type="file"
              ref="fileInput"
              class="file-upload-input"
              @change="onFileChange"
              multiple
              hidden
              accept=".jpg, .jpeg, .png"
            />
          </section>
          <section id="feed-post-info">
            <p class="feed-profile-container">
              <span class="feed-profile-img"></span
              ><span class="feed-profile-nickname">닉네임</span>
            </p>
            <textarea
              placeholder="내용을 입력해 주세요..."
              id="textarea"
              v-model="feedContent"
              @keyup="contentLengthCheck"
            ></textarea>
            <p id="feed-content-size">{{ feedContent.length }} / 1,000</p>
          </section>
        </section>

        <p class="upload-warning">
          <img
            src="@/assets/icons/myfeed/dashicons_info-outline.svg"
            alt="이미지 형식"
          />
          권장사항 : 최대 3장 / JPG PNG / 10 MB 이하 파일
        </p>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from "vue-property-decorator";
import { ins } from "@/lib/axios";

@Component
export default class FeedPosting extends Vue {
  @Ref() readonly fileInput!: any;

  feedContent = "";
  contentSize = this.feedContent.length;
  feedPosting = true;
  notDisabledButton = "notDisabledButton";
  disabledButton = "disabledButton";

  isDragged = false;
  fileList: FileList[] = [];
  images: any;

  userNickname = this.$store.getters["userStore/nickname"];

  private historyBack() {
    this.$router.go(-1);
  }

  clickInputTag() {
    this.fileInput.click();
  }

  dropInputTag(e: any) {
    let files = Array.from(e.dataTransfer.files, (v) => v)[0];
    this.images.push(files);
  }

  onFileChange() {
    const data = this.fileInput.files[0];
    this.images.push(data);
  }

  async posting() {
    try {
      const formData = new FormData();
      formData.append("feedContent", this.feedContent);
      formData.append("userNickname", this.userNickname);
      formData.append("fileList", this.images);
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const { data } = await ins.post("/user/feed", formData, { headers });
      console.log(data);
      if (data) {
        await this.$router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  @Watch("feedContent")
  private contentLengthCheck() {
    this.feedPosting = !this.feedContent.length;

    if (this.feedContent.length >= 1000) {
      alert("놉ㅡㅡ");
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
  background: #e2e2e2;
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
  padding-bottom: 217px;
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
  color: #bdbdbd;
  border-radius: 50px;
  width: 100px;
  padding: 12px;
  margin-right: 40px;
}

/* 버튼 바인딩 - 글자 입력 후 disabled 해제 */
.notDisabledButton {
  background: black;
}
.disabledButton {
  background: #f5f5f5;
  cursor: auto;
}

#feed-post-body {
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background: white;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  max-height: 700px;
  padding-left: 20px;
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
  cursor: pointer;
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
  color: #919191;
  outline: none;
  padding: 5px;
  font-size: 16px;
}
#feed-content-size {
  display: flex;
  justify-content: flex-end;
  color: #bdbdbd;
  font-size: 16px;
}

.upload-warning {
  color: #919191;
  padding-left: 27px;
}

/* 프로필 */
#feed-post-info {
  width: 560px;
  height: 540px;
}

.feed-profile-container {
  display: flex;
  align-items: center;
}
.feed-profile-img {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 50%;
}
.feed-profile-nickname {
  display: inline-block;
  color: #222222;
  font-size: 16px;
  padding-left: 16px;
  font-weight: 600;
}
</style>
