<template>
  <main
    id="dotto-board-container"
    :class="dottoBoardBackground === 'main' ? '' : otherBgColor"
  >
    <article id="side-search-filter-wrapper">
      <transition v-if="showSearchFilter">
        <side-filter @closeFilter="closeFilter" />
      </transition>
    </article>
    <router-view
      @showFilter="showFilter"
      @changeBackground="changeBackground"
    />
  </main>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from "vue-property-decorator";
import { DottoComponent } from "@/components/dotto";
import { SideFilter } from "@/components/common";

@Component({
  components: {
    DottoComponent,
    SideFilter,
  },
})
export default class DottoBoardView extends Vue {
  dottoBoardBackground = "main";
  showSearchFilter = false;
  otherBgColor = "dotto-background-other";
  currentPath = "";

  created(): void {
    this.changeNavType();
  }

  closeFilter(type: boolean): void {
    this.showSearchFilter = type;
  }

  private showFilter(show: boolean): void {
    this.showSearchFilter = show;
  }

  @Watch("$route")
  routeCheck(): void {
    this.showSearchFilter = false;
  }

  @Emit("changeNavType")
  private changeNavType(): string {
    return "community";
  }

  private changeBackground(type: string) {
    this.dottoBoardBackground = type;
  }
}
</script>

<style scoped>
#dotto-board-container {
  width: 100%;
  height: 100%;
  min-height: 800px;
  background: white;
  margin-top: 150px;
}

#side-search-filter-wrapper {
  position: absolute;
  top: 0;
}

.dotto-background-other {
  background: #f6f6f6 !important;
}
</style>
