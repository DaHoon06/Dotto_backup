<template>
  <div>
    <header-component @blurBackground="blurBackground" />
    <navigation-component />
    <div id="main-wrapper">
      <side-menu-component v-if="showSideComponent"  />
      <main-component @showFilterDiv="showFilter" />
    </div>
    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainComponent from "@/components/MainComponent.vue";
import { SideMenuComponent, HeaderComponent, NavigationComponent } from "@/components/common";
import FooterComponent from "@/components/common/FooterComponent.vue";

@Component({
  components: {
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    MainComponent,
    NavigationComponent
  }
})
export default class MainView extends Vue {
  showSideComponent: boolean;
  blurCss: string;
  constructor() {
    super();
    this.showSideComponent = false
    this.blurCss = '';
  }

  private showFilter(showFilterDiv: boolean) {
    console.log(showFilterDiv)
    this.showSideComponent = showFilterDiv;
  }

  private blurBackground(css: string) {
    this.blurCss = css;
  }
}
</script>

<style scoped>
#main-wrapper {
  margin-top: 60px;
}
</style>