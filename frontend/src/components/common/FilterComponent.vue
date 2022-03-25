<template>
  <div v-if="showFilterDiv">
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FilterComponent extends Vue {
  @Prop() showFilterDiv?: boolean;

  filterType: string;

  constructor() {
    super();
    this.filterType = '';
  }


}
</script>

<style scoped>

</style>