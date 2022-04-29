<template>
  <div>
    <header id="header">
      <header-component @blurBackground="blurBackground" />
      <navigation-component  />
      <menu-button />
    </header>

    <section>
      <main-banner-component />
    </section>

    <main id="main-wrapper" :class='blurCss'>
      <transition name="fade">
        <side-menu-component v-show="showSideComponent"  />
      </transition>
      <main-component @showFilter="showFilter" />
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
  NavigationComponent,
  MenuButton
} from "@/components/common";
import { BLUR } from "@/interfaces/common/ICommon";
import FollowListComponent from "@/components/main/FollowListComponent.vue";
import MainBannerComponent from "@/components/main/MainBannerComponent.vue";


@Component({
  components: {
    MainBannerComponent,
    FollowListComponent,
    SideButtonComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    MainComponent,
    MenuButton
  }
})
export default class MainView extends Vue {
  showSideComponent = true;
  blurCss: BLUR;

  constructor() {
    super();
    this.blurCss = BLUR.OFF;
  }

  private showFilter(showFilter: boolean) {
    this.showSideComponent = showFilter;
  }

  private blurBackground(isBlur: boolean) {
    isBlur ? this.blurCss = BLUR.ON : this.blurCss = BLUR.OFF
  }

}
</script>

<style scoped>
#main-wrapper {
  display: flex;
  max-width: 2160px;
  width: 100%;
  margin: auto;
  justify-content: space-between;
}

.setBlur {
  filter: blur(4px)
}

.fade-enter-active {
  transition: all .4s ease;
}

.fade-leave-active {
  transition: all 0s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1260px){
  #navigation-container {
    display: none;
  }
}

@media screen and (max-width: 500px){



}

</style>