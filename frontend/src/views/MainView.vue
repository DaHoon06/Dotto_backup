<template>
  <div>
    <header id="header">
      <header-component @blurBackground="blurBackground" />
      <navigation-component />
    </header>

    <main id="main-wrapper">
      <side-menu-component  />
      <main-component @showFilterDiv="showFilter" />
      <side-button-component />
    </main>

    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainComponent from "@/components/MainComponent.vue";
import {
  SideButtonComponent,
  SideMenuComponent,
  HeaderComponent,
  FooterComponent,
  NavigationComponent
} from "@/components/common";

@Component({
  components: {
    SideButtonComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    MainComponent,
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
  max-width: 1980px;
  width: 100%;
  margin: auto;
}


</style>