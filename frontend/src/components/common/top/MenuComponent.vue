<template>
  <nav class="menu-list-container">
    <section>
      <a>
        <h1 class="menu-list-items" @click="closeMenu">로그인</h1>
      </a>
    </section>
    <section>
      <h1 class="menu-title">My</h1>
      <ul>
        <li class="menu-list-items">타투도안</li>
        <li class="menu-list-items">내 예약목록</li>
        <li class="menu-list-items">내 댓글 / 리뷰</li>
        <li class="menu-list-items">찜한 목록</li>
      </ul>

      <ul>
        <li class="menu-list-items">보안 / 계정</li>
        <li class="menu-list-items">일반회원 계정</li>
        <li class="menu-list-items">로그아웃</li>
      </ul>
    </section>
    <section>
      <h1 class="menu-title">My</h1>
      <ul>
        <li class="menu-list-items">타투도안</li>
        <li class="menu-list-items">내 예약목록</li>
        <li class="menu-list-items">내 댓글 / 리뷰</li>
        <li class="menu-list-items">찜한 목록</li>
      </ul>

      <ul>
        <li class="menu-list-items">보안 / 계정</li>
        <li class="menu-list-items">아티스트 계정</li>
        <li class="menu-list-items">로그아웃</li>
      </ul>
    </section>

    <section>
      <h1 class="menu-title">List</h1>
      <ul>
        <li class="menu-list-items">try Dotto</li>
        <li class="menu-list-items">COMMUNITY</li>
        <li class="menu-list-items">Feed</li>
      </ul>
    </section>

    <section>
      <h1 class="menu-title">고객지원</h1>
      <ul>
        <li class="menu-list-items">FAQ</li>
        <li class="menu-list-items">공지사항</li>
      </ul>
    </section>
  </nav>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class MenuComponent extends Vue {
  @Emit("closeMenu")
  closeMenu(): boolean {
    this.$common.scrollHidden(true);
    this.$store.commit("utilsStore/showModal", true);
    return false;
  }
}
</script>

<style scoped>
.menu-list-items:hover {
  background: #222222;
  color: white;
  cursor: pointer;
}
.menu-list-container {
  color: #222222;
  text-align: center;
  overflow-y: auto;
}
.menu-list-items {
  border-bottom: 1px solid #e2e2e2;
  color: #222222;
  font-weight: 500;
  font-size: 14px;
  padding: 10px;
}

.menu-title {
  font-size: 14px;
  background: #e2e2e2;
  color: #8a8a8a;
  padding: 10px;
  font-weight: 600;
}
</style>
