<template>
  <div id="sideMenu-container">
    <section>
      <p><b>FILTER</b></p>
    </section>
    <section>
      <div id="sort-area">
        <span class="test">정렬</span>
        <span><img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" /></span>
      </div>
      <div>
        <ul>
          <li>
            <input type="radio" id="recent" />
            <label for="recent">최신순</label>
          </li>
          <li>
            <input type="radio" id="views" />
            <label for="views">조회순</label>
          </li>
          <li>
            <input type="radio" id="like" />
            <label for="like">좋아요순</label>
          </li>
          <li>
            <input type="radio" id="distance" />
            <label for="distance">거리순</label>
          </li>
        </ul>
      </div>
    </section>

    <hr />

    <section>
      <div id="tag-area">
        <span id="tag-title">#태그</span>
        <span><img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" /></span>
      </div>
      <div>
        이쪽 태그 영역
      </div>
    </section>

    <hr />

    <section>
      <div id="location-area">
        <span>지역</span>
        <span>
          <img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" />
        </span>
      </div>
      <div>
        <input type="text" id="side-menu-search-bar" />
        <button>
          <img class="side-menu-drop-btn" id="search-btn" src="@/assets/nav/search.png" alt="search" />
        </button>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SideMenuComponent extends Vue {

}
</script>

<style scoped>
#sideMenu-container {
  position: absolute;
  width: 296px;
  max-height: 992px;
  height: 100%;
  top: 88px;
}

#tag-title {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #222222;
}

.side-menu-drop-btn {
  width: 12px;
}

#sort-area, #tag-area, #location-area {
  display: flex;
  justify-content: space-between;
}

#side-menu-search-bar {
  border: none;
  border-bottom: 2px solid black;
}

#search-btn {
  position: relative;
  right: 15px;
}
.test {
  text-align: left;
}
</style>