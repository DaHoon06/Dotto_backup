<template>
  <div>
    <header id="header">
      <header-component @blurBackground="blurBackground" />
      <navigation-component />
    </header>

    <main id="main-wrapper">
      <side-menu-component  />
      <main-component @showFilterDiv="showFilter" />
    </main>

    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainComponent from "@/components/MainComponent.vue";
import { SideMenuComponent, HeaderComponent } from "@/components/common";
import FooterComponent from "@/components/common/FooterComponent.vue";
import NavigationComponent from "@/components/common/NavigationComponent.vue";

@Component({
  components: {
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
  margin-top: 100px;
  position: relative;
  left: 20%;
}


</style>