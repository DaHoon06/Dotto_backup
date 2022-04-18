<template>
  <aside id="sideMenu-container">
    <section id="sideMenu-title">
      <article><b>FILTER</b></article>
    </section>

    <section>
      <article id="tag-area">
        <span id="tag-title">#태그</span>
        <button @click="showTags"><img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" /></button>
      </article>
      <article v-if="showTagArea">
        이쪽 태그 영역
      </article>
    </section>

    <hr />

    <section>
      <article id="location-area">
        <span>지역</span>
        <button @click="showLocation">
          <img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" />
        </button>
      </article>
      <article v-if="showLocationArea">
        <input type="text" id="side-menu-search-bar" />
        <button>
          <img class="side-menu-drop-btn" id="search-btn" src="@/assets/nav/search.png" alt="search" />
        </button>
      </article>
    </section>

  </aside>
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


  private showTags() {
    this.showTagArea = !this.showTagArea;
  }

  private showLocation() {
    this.showLocationArea = !this.showLocationArea;
  }


}
</script>

<style scoped>
#sideMenu-container {
  position: fixed;
  width: 200px;
  max-height: 992px;
  height: 100%;
  top: 100px;
  margin-left: 40px;
}

#sideMenu-title {
  margin-top: 65px;
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

#tag-area, #location-area {
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

@media screen and (max-width: 1719px) {
  #sideMenu-container {
    display: none;
  }
}

</style>