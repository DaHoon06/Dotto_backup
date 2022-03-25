<template>
  <main id="main-container">
    <section id="filter-area">
      <span>
        <sort-component @typeName="typeName" :showSortComponent="showSortComponent" />
        <button @click="showSort" >
          {{ sendSortType }}
          <img class="side-menu-drop-btn" src="@/assets/nav/filter-btn.png" alt="filter" />
        </button>

      </span>
      <span>
        <button  @click="showFilter" >
          <span class="filter-text"><b>FILTER</b></span>
          <img class="filter-text" src="@/assets/main/filter.png" alt="filter" />
        </button>
      </span>
    </section>

    <section>
      게시판 리스트
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SortComponent from "@/components/common/SortComponent.vue";

@Component({
  components: {
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

  private showFilter() {
    this.showFilterComponent = !this.showFilterComponent
    this.$emit('showFilterDiv', this.showFilterComponent)
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
  margin: auto auto auto 300px;
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

.filter-text {
  margin-left: 20px;
}

.side-menu-drop-btn {
  width: 12px;
}
</style>