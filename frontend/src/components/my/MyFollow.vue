<template>
  <article id="follow-artist-area">
    <div>
      <span> < </span>
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div class="follow-artist-list">
      <img
        class="follow-artist-list"
        src="@/assets/icons/main/sample/sample-follow-artist.png"
        alt="sample1"
      />
    </div>
    <div>
      <span> > </span>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyFollowComponent extends Vue {}
</script>

<style scoped>
#follow-artist-area {
  height: 10em;
  width: 100%;
  margin: auto;
  max-width: 1260px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}

.follow-artist-list {
  border: 1px solid #e2e2e2;
  border-radius: 45px;
  background: #f5f5f5;
  width: 50px;
  height: 50px;
}
</style>
