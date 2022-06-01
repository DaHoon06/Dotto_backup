<template>
  <div id="app" :class='`${scrollPrevent}`'>
    <header-view
        @blurBackground="blurBackground"
        @notScrollBody="notScrollBody"
    />
    <router-view :class='`${blurCss}`' />
    <footer-component :class='`${blurCss}`' />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderView from "@/views/HeaderView.vue";
import { FooterComponent } from "@/components/common";
import { BLUR, SCROLL } from "@/interfaces/common/ICommon";


@Component({
  components: {
    FooterComponent,
    HeaderView
  }
})
export default class App extends Vue {
  blurCss: BLUR = BLUR.OFF;
  scrollPrevent: SCROLL = SCROLL.ON;


  private blurBackground(isBlur: boolean) {
    isBlur ? this.blurCss = BLUR.ON : this.blurCss = BLUR.OFF;
    isBlur ? this.scrollPrevent = SCROLL.OFF : this.scrollPrevent = SCROLL.ON;
  }

  private notScrollBody(scrollEvent: boolean) {
    scrollEvent ? this.scrollPrevent = SCROLL.OFF : this.scrollPrevent = SCROLL.ON;
  }

}
</script>

<style>
.setBlur {
  filter: blur(4px);
}

.notScroll {
  position: fixed;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.notScroll::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
</style>
