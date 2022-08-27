<template>
  <main class="search-result-container">
    <search-categories />
    <follow-list-component :memberType="(memberType = 'artist')" />
    <follow-list-component :memberType="(memberType = 'user')" />

    <article id="main-wrapper">
      <article id="home-dotto-container">
        <article class="main-component-wrapper">
          <section class="main-items-wrapper">
            <h5>닷투 게시판</h5>
            <small
              >타투이스트가 올린 다양한 작품 중 내 취향을 찾아보세요!</small
            >
          </section>
          <section>
            <router-link to="/dotto/board/index" class="show-all-lists"
              >전체보기
              <img
                src="@/assets/icons/main/redirect-arrow.png"
                class="redirect-arrow"
                alt="dotto-board"
              />
            </router-link>
          </section>
        </article>
        <dotto-component :limit="limit" :infinite-scroll="false" />
      </article>

      <article id="home-seekers-wrapper">
        <article class="main-component-wrapper">
          <section class="main-items-wrapper">
            <h5>닷찾사 게시판</h5>
            <small
              >내가 원하는 도안을 제시하고 타투이스트에게 답변
              받아보세요!</small
            >
          </section>
          <section>
            <router-link to="" class="show-all-lists"
              >전체보기
              <img
                src="@/assets/icons/main/redirect-arrow.png"
                class="redirect-arrow"
                alt="dotto-board"
              />
            </router-link>
          </section>
        </article>
        닷찾사 게시판 컴포넌트 위치 ( limit: 8개 )
      </article>

      <article id="home-feed-container">
        <article class="main-component-wrapper">
          <section class="main-items-wrapper">
            <h5>FEED</h5>
            <small>자유롭게 이야기를 나눠요!</small>
          </section>
          <section>
            <router-link to="" class="show-all-lists"
              >전체보기
              <img
                src="@/assets/icons/main/redirect-arrow.png"
                class="redirect-arrow"
                alt="dotto-board"
              />
            </router-link>
          </section>
        </article>
        FEED 게시판 컴포넌트 위치 ( limit: 8개 )
      </article>
    </article>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FollowListComponent from "@/components/main/FollowList.vue";
import SearchCategories from "@/components/search/SearchCategories.vue";
import { DottoComponent } from "@/components/dotto";

@Component({
  components: {
    FollowListComponent,
    SearchCategories,
    DottoComponent,
  },
})
export default class SearchResultView extends Vue {
  memberType = "";
  limit = 8;
}
</script>

<style scoped>
.search-result-container {
  padding-top: 224px;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  background: white;
}

/* 메인 화면과 중복  */
#main-wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 10em auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.main-component-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.main-items-wrapper {
  display: flex;
  align-items: center;
}

.show-all-lists {
  color: #222222;
  font-weight: bold;
}
.show-all-lists:hover {
  color: #696969;
}

.redirect-arrow {
  width: 20px;
  height: 5px;
}
</style>
