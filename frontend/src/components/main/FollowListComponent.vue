<template>
  <article id="follow-artist-area">
    <p class="follow-artist-title">내가 팔로우 한 아티스트</p>
    <div class="follow-artist-list">
      <div>
        <img class="follow-artist-list" src="@/assets/main/sample/sample-follow-artist.png" alt="sample1" />
      </div>
      <p class="follow-artist-nickname">닉네임</p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FollowListComponent extends Vue {

}
</script>

<style scoped>

.follow-artist-list {
  width: 80px;
  height: 80px;
  left: 381px;
  top: 246px;
  margin-left: 23px;
}

.follow-artist-title {
  margin-left: 23px;
}

.follow-artist-nickname {
  margin-left: 37px;
}
</style>