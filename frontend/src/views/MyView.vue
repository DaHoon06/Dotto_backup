<template>
  <div>
    <header id="header">
      <header-component @blurBackground="blurBackground" />
      <navigation-component  />
      <menu-button />
    </header>

    <section id="my-information-wrapper" :class='blurCss'>
      <my-information-component />
    </section>

    <section id="my-follow-wrapper" :class='blurCss'>
      <my-follow-component />
    </section>

    <section>
      <ul>
        <li>마이피드</li>
        <li>좋아요</li>
        <li>내 댓글</li>
        <li>내 리뷰</li>
      </ul>
    </section>

    <footer-component :class='`${blurCss}`' />
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
import MyInformationComponent from "@/components/my/MyInformationComponent.vue";
import MyFollowComponent from "@/components/my/MyFollowComponent.vue";

@Component({
  components: {
    MyFollowComponent,
    MyInformationComponent,
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
export default class MyView extends Vue {
  blurCss: BLUR;

  constructor() {
    super();
    this.blurCss = BLUR.OFF;
  }

  private blurBackground(isBlur: boolean) {
    isBlur ? this.blurCss = BLUR.ON : this.blurCss = BLUR.OFF
  }
}
</script>

<style scoped>
#my-information-wrapper {
  margin: 10em auto 4em auto;
  width: 50vw;
}
#my-follow-wrapper {
  width: 50vw;
  margin: auto;
}

.setBlur {
  filter: blur(4px)
}
</style>