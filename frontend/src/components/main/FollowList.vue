<template>
  <article class="follow-list-container">
    <section v-if="showList">
      <p>
        <label class="follow-artist-title">{{
            memberType === "artist" ? "아티스트" : "회원"
        }}</label>
      </p>
      <section id="follow-artist-area" v-if="this.userList.length">
        <div class="follow-artist-list" v-for="(user, index) of userList" :key="index">
          <img
              class="follow-artist-list"
              src="@/assets/icons/main/sample/sample-follow-artist.png"
              alt="sample1"
          />
          <span class="follow-artist-nickname">{{ user.nickname }}</span>
        </div>
        {{memberProps}}
        <section class="follow-artist-list">
          <button class="follow-more">+</button>
          <span class="follow-artist-nickname">MORE</span>
        </section>
      </section>
      <section v-else>
        <p class="text-center">검색 결과가 존재하지 않습니다.</p>
      </section>
    </section>
    <section v-else id="follow-artist-scroll">
      <div class="follow-artist-list">
        <button class="follow-more">+</button>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface UserListsData {
  src?: string,
  nickname?: string,
  originName?: string,
}

@Component
export default class FollowListComponent extends Vue {
  @Prop({ default: "" }) memberType?: string;
  @Prop() memberProps?: UserListsData[];

  showList = true;
  lastScrollPosition = 0;
  scrollValue = 0;
  OFFSET = 200;

  userList: UserListsData[] = [];

  created() {
    if (this.memberProps?.length) this.userList = this.memberProps;
  }

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
