<template>
  <div id="sort-area" v-if="showSortComponent" >
    <ul>
      <li v-for="(types, index) of this.filterType" :key="index">
        <input type="radio" :id="index" name="type" @change="sendSortType(index)" :value="types" />
        <label :for="index">{{ types }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SortComponent extends Vue {
  @Prop() showSortComponent?: boolean;

  filterType: string[];

  constructor() {
    super();
    this.filterType = ['최신순', '조회순', '좋아요순', '거리순'];
  }


  private sendSortType(index: number) {
    this.$emit('typeName', this.filterType[index])
  }




}
</script>

<style scoped>
#sort-area {
  border: 1px solid gray;
  border-radius: 10px;
  background: #FFFFFF;
  width: 120px;
  height: 120px;
  position: absolute;
  display: inline-block;
  margin-top: 30px;
}


</style>