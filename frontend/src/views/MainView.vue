<template>
  <div :class='`${scrollPrevent}`'>
    <header id="header">
      <header-component
          @blurBackground="blurBackground"
          @notScroll="notScrollBody" />
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

    <footer-component :class='`${blurCss}`' />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import MainComponent from "@/components/MainComponent.vue";
import {
  FooterComponent,
  HeaderComponent,
  MenuButton,
  NavigationComponent,
  SideButtonComponent,
  SideMenuComponent
} from "@/components/common";
import {BLUR, SCROLL} from "@/interfaces/common/ICommon";
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
  scrollPrevent: SCROLL;

  constructor() {
    super();
    this.blurCss = BLUR.OFF;
    this.scrollPrevent = SCROLL.ON;
  }

  private showFilter(showFilter: boolean) {
    this.showSideComponent = showFilter;
  }

  private blurBackground(isBlur: boolean) {
    isBlur ? this.blurCss = BLUR.ON : this.blurCss = BLUR.OFF
  }

  private notScrollBody(scrollEvent: boolean) {
    scrollEvent ? this.scrollPrevent = SCROLL.OFF : this.scrollPrevent = SCROLL.ON;
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

.notScroll {
  position: fixed;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.notScroll::-webkit-scrollbar {
  position: fixed;
  display: none;
  width: 0 !important;
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