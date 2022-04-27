<template>
  <article id="follow-artist-area">
    <p class="follow-artist-title">내가 팔로우 한 아티스트</p>

    <div class="follow-artist-list">
      <img class="follow-artist-list" src="@/assets/main/sample/sample-follow-artist.png" alt="sample1" />
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
#follow-artist-area {
  height: 10em;
  width: 100%;
  margin: auto;
  max-width: 1260px;
  display: flex;
  flex-direction: column;
}

.follow-artist-list {
  width: 80px;
  height: 80px;
  margin-left: 23px;
}

.follow-artist-title {
  margin-left: 23px;
  font-size: 14px;
  font-weight: 600;
  color: #222222;
}

.follow-artist-nickname {
  margin-left: 37px;
  font-size: 8px;
  text-align: center;
}
</style>