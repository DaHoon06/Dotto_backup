<template>
  <div id="dotto-board-container"
       :class="dottoBoardBackground">
    <div id="side-search-filter-wrapper">
      <transition name="fade">
        <search-filter-component v-show="showSearchFilter" />
      </transition>
    </div>
    <router-view
        @showFilter="showFilter" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { DottoComponent } from "@/components/dotto";
import { SearchFilterComponent } from "@/components/common";

@Component({
  components: {
    DottoComponent,
    SearchFilterComponent
  }
})
export default class DottoBoardView extends Vue {
  dottoBoardBackground = '';
  showSearchFilter = false;

  created() {
    this.changeNavType();
  }

  @Emit('changeNavType')
  private changeNavType(): string {
    return 'community';
  }

  private showFilter(show: boolean): void {
    this.showSearchFilter = show;
  }
}
</script>

<style scoped>
#dotto-board-container {
  margin-top: 100px;
  height: 100%;
  min-height: 800px;
  background: #f6f6f6;
}

#side-search-filter-wrapper {
  position: absolute;
  top: 0;
}
</style>