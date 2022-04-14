<template>
  <div>
    <header id="header">
      <header-component @blurBackground="blurBackground" />
      <navigation-component />
    </header>

    <main id="main-wrapper" :class='blurCss'>
      <side-menu-component  />
      <main-component @showFilterDiv="showFilter" />
      <side-button-component />
    </main>

    <footer-component :class='`${blurCss} `' />
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
import { BLUR } from "@/interfaces/common/ICommon";


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
  blurCss: BLUR;

  constructor() {
    super();
    this.showSideComponent = false
    this.blurCss = BLUR.OFF;
  }

  private showFilter(showFilterDiv: boolean) {
    console.log(showFilterDiv)
    this.showSideComponent = showFilterDiv;
  }

  private blurBackground(isBlur: boolean) {
    isBlur ? this.blurCss = BLUR.ON : this.blurCss = BLUR.OFF
  }

}
</script>

<style scoped>
#main-wrapper {
  max-width: 1980px;
  width: 100%;
  margin: auto;
}

.setBlur {
  filter: blur(4px)
}


</style>