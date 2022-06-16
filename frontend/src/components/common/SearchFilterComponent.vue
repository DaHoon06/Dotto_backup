<template>
  <aside id="sideMenu-container">

    <div id="side-menu-flex">
      <section class="side-menu-items">
        <article>
          <div id="sideMenu-title">
            <b>FILTER</b>
          </div>
        </article>
        <article id="tag-area">
          <span id="tag-title">#태그</span>
          <button @click="showTags"><img class="side-menu-drop-btn" src="@/assets/icons/nav/filter-btn.png" alt="filter" /></button>
        </article>
        <article id="tag-list" v-if="showTagArea">
          # 태그
        </article>
      </section>

      <hr />

      <section class="side-menu-items" id="side-menu-item-location">
        <article id="location-area">
          <span>지역</span>
          <button class="side-menu-drop-btn" @click="showLocation">
            <img class="side-menu-drop-btn" src="@/assets/icons/nav/filter-btn.png" alt="filter" />
          </button>
        </article>
        <article v-if="showLocationArea">
          <input type="text" id="side-menu-search-bar" />
          <button class="side-menu-drop-btn">
            <img class="side-menu-drop-btn" id="search-btn" src="@/assets/icons/nav/search.png" alt="search" />
          </button>
        </article>
      </section>

      <section class="side-menu-items">
        <article>
          <button class="side-menu-button" id="reset">초기화</button>
          <button class="side-menu-button" id="show-result">결과보기</button>
        </article>
      </section>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchFilterComponent extends Vue {

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
  animation: fadein 3s;
  height: 100vh;
  margin-left: 10em;
  margin-top: 10em;
  display: inline-block;
  overflow: scroll;
}

#side-menu-flex {
  width: 30em;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
}

.side-menu-items {
  margin-bottom: 30%;
}

#side-menu-item-location {
  height: 70%;
  width: 100%;
}

#sideMenu-title {
  margin-top: 65px;
  width: 100%;
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

.side-menu-drop-btn:hover {
  cursor: pointer;
}

#tag-area, #location-area {
  display: flex;
  justify-content: space-between;
}

#side-menu-search-bar {
  border: none;
  outline: none;
  padding: 4px;
  border-bottom: 2px solid black;
}

#search-btn {
  position: relative;
  right: 15px;
}

#reset {
  width: 4em;
  color: #919191;
}

#show-result {
  width: 10em;
  background: #222222;
  color: #ffffff;
}

.side-menu-button {
  box-sizing: border-box;
  border: 1px solid #E2E2E2;
  font-weight: 400;
  border-radius: 4px;
  margin-right: 2em;
  margin-left: 2em;
  line-height: 17px;
  height: 3em;
  font-size: 14px;
}

.side-menu-button:hover {
  cursor: pointer;
  font-weight: bold;
}

@media screen and (max-width: 1440px){
  hr {
    width: 70%;
    margin-left: 2em;
  }
  #sideMenu-container {
    margin-left: 0;
  }

  #sideMenu-title {
    padding-left: 4em;
    padding-bottom: 1em;
  }

  .side-menu-button {
    margin-left: 1.25em;
  }

  #tag-area, #location-area {
    width: 70%;
    margin-left: 2em;
  }

  #side-menu-search-bar {
    width: 70%;
    margin-left: 2em;
  }

  #tag-list {
    padding-left: 4em;
    height: 100%;
  }
}

@media screen and (max-width: 1260px) {
  #sideMenu-container {
    display: none;
  }
}

</style>