<template>
  <div id="sideMenu-container">
    <section>
      <p><b>FILTER</b></p>
    </section>
    <section>
      <div id="sort-area">
        <span class="test">정렬</span>
        <button @click="showSort"><img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" /></button>
      </div>
      <div v-if="showSortArea">
        <ul>
          <li>
            <input type="radio" id="recent" name="recent" value="1" v-model="filterType" />
            <label for="recent">최신순</label>
          </li>
          <li>
            <input type="radio" id="views" name="views" value="2" v-model="filterType" />
            <label for="views">조회순</label>
          </li>
          <li>
            <input type="radio" id="like" name="like" value="3" v-model="filterType" />
            <label for="like">좋아요순</label>
          </li>
          <li>
            <input type="radio" id="distance" name="distance" value="4" v-model="filterType" />
            <label for="distance">거리순</label>
          </li>
        </ul>
      </div>
    </section>

    <hr />

    <section>
      <div id="tag-area">
        <span id="tag-title">#태그</span>
        <button @click="showTags"><img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" /></button>
      </div>
      <div v-if="showTagArea">
        이쪽 태그 영역
      </div>
    </section>

    <hr />

    <section>
      <div id="location-area">
        <span>지역</span>
        <button @click="showLocation">
          <img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" />
        </button>
      </div>
      <div v-if="showLocationArea">
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
  filterType: string;
  showSortArea: boolean;
  showTagArea: boolean;
  showLocationArea: boolean;

  constructor() {
    super();
    this.filterType = '';
    this.showSortArea = false;
    this.showTagArea = false;
    this.showLocationArea = false;
  }

  private showSort() {
    if (!this.showSortArea) {
      this.showSortArea = true;
    } else {
      this.showSortArea = false;
    }
  }

  private showTags() {
    if (!this.showTagArea) {
      this.showTagArea = true;
    } else {
      this.showTagArea = false;
    }
  }

  private showLocation() {
    if (!this.showLocationArea) {
      this.showLocationArea = true;
    } else {
      this.showLocationArea = false;
    }
  }


}
</script>

<style scoped>
#sideMenu-container {
  position: fixed;
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