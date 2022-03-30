<template>
  <div id="main-container">
    <section id="filter-area">
      <span>
        <sort-component @typeName="typeName" :selectedType="filterType" :showSortComponent="showSortComponent" />
        <button @click="showSort" >
          {{ sendSortType }}
          <img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" />
        </button>
      </span>
    </section>

    <section id="tattoo-container">
      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>

      <div class="tattoo-board-list">
        <div>
          타투 이미지~~~
        </div>
        <p>글 제목</p>
        <p>서울/마포(홍대)</p>
        <p>50% 5만원 10만원</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SortComponent from "@/components/common/SortComponent.vue";
import SideButtonComponent from "@/components/common/SideButtonComponent.vue";

@Component({
  components: {
    SideButtonComponent,
    SortComponent,
  }
})
export default class MainComponent extends Vue {
  showSortComponent: boolean;
  showFilterComponent: boolean;
  filterType: string;

  constructor() {
    super();
    this.showSortComponent = false;
    this.showFilterComponent = false;
    this.filterType = '최신순'
  }

  private showSort() {
    this.showSortComponent = !this.showSortComponent;
  }

  private typeName(type: string) {
    this.filterType = type;
  }

  private get sendSortType() {
    return this.filterType;
  }



}
</script>

<style scoped>
#main-container {
  border: 1px solid gray;
  width: 100%;
  margin: 100px auto auto auto;
  max-width: 1000px;
  min-height: 992px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#filter-area {
  height: 30px;
  text-align: right;
  margin-right: 20px;
  margin-top: 10px;
}

#tattoo-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.side-menu-drop-btn {
  width: 12px;
}

.tattoo-board-list {
  border: 1px solid gray;
  width: 220px;
  height: 230px;
  margin-left: 23px;
  margin-top: 30px;
}
</style>