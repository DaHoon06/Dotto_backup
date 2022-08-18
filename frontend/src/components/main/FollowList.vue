<template>
  <section class="follow-list-container">
    <div v-if="showList">
      <article>
        <span class="follow-artist-title">{{
          memberType === "artist" ? "아티스트" : "회원"
        }}</span>
      </article>
      <article id="follow-artist-area">
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <img
            class="follow-artist-list"
            src="@/assets/icons/main/sample/sample-follow-artist.png"
            alt="sample1"
          />
          <span class="follow-artist-nickname">닉네임</span>
        </div>
        <div class="follow-artist-list">
          <button class="follow-more">+</button>
          <span class="follow-artist-nickname">MORE</span>
        </div>
      </article>
    </div>
    <div v-else id="follow-artist-scroll">
      <div class="follow-artist-list">
        <button class="follow-more">+</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FollowListComponent extends Vue {
  @Prop({ default: "" }) memberType?: string;
  showList = true;
  lastScrollPosition = 0;
  scrollValue = 0;
  OFFSET = 200;

  mounted(): void {
    this.lastScrollPosition = window.pageXOffset;
    window.addEventListener("scroll", this.onScroll);
  }

  private onScroll() {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < 0) return;
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < this.OFFSET)
      return;
    this.showList = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }
}
</script>

<style scoped>
.follow-list-container {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  background: white;
}

#follow-artist-area {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}

.follow-more {
  display: block;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  height: 100%;
  color: #e2e2e2;
}

.follow-artist-list {
  border: 1px solid #e2e2e2;
  border-radius: 45px;
  background: #f5f5f5;
  width: 80px;
  height: 80px;
}

.follow-artist-title {
  font-size: 14px;
  font-weight: 600;
  color: #222222;
}

.follow-artist-nickname {
  font-size: 8px;
  text-align: center;
  margin-left: 3em;
  color: #696969;
  font-weight: 400;
  line-height: 17px;
  font-style: normal;
}

#follow-artist-scroll {
  position: fixed;
  right: 2rem;
}

#follow-artist-scroll > .follow-artist-list {
  width: 60px;
  height: 60px;
  box-shadow: 1px 1px 1px #f5f5f5;
}
</style>
