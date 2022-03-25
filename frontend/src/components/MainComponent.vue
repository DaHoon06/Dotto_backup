<template>
  <div id="main-container">
    <div id="filter-area">
      <span class="filter-text"><b>FILTER</b></span>
      <button class="filter-text" @click="showFilter">
        <img src="@/assets/main/filter.png" alt="filter" />
      </button>
      <filter-component
          :showFilterDiv="showFilterDiv" />

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FilterComponent from "@/components/common/FilterComponent.vue";

@Component({
  components: {
    FilterComponent
  }
})
export default class MainComponent extends Vue {
  showFilterDiv: boolean;
  constructor() {
    super();
    this.showFilterDiv = false;
  }

  private showFilter() {
    this.showFilterDiv = !this.showFilterDiv;
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
}
#filter-area {
  float: right;
  width: 100%;
  max-width: 1000px;
  height: 10px;
  text-align: right;
  margin-right: 50px;
  margin-top: 10px;
}

.filter-text {
  margin-left: 20px;
}
</style>