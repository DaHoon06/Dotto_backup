<template>
  <div>
    <section>
      <main-banner-component />
    </section>

    <main id="main-wrapper" >
      <main-component @showFilter="showFilter" />
      <top-scroll-button />
    </main>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainComponent from "@/components/MainComponent.vue";
import {
  FooterComponent,
  HeaderComponent,
  MenuButton,
  NavigationComponent,
  TopScrollButton,
} from "@/components/common";
import FollowListComponent from "@/components/main/FollowListComponent.vue";
import MainBannerComponent from "@/components/main/MainBannerComponent.vue";

@Component({
  components: {
    MainBannerComponent,
    FollowListComponent,
    TopScrollButton,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    MenuButton
  }
})
export default class MainView extends Vue {
  showSideComponent = true;

  private showFilter(showFilter: boolean) {
    this.showSideComponent = showFilter;
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