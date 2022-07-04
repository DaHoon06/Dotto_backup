<template>
  <div id="app">
    <header-view
        :navigationType="navigationTypeComputed"
    />
    <router-view
        :class='[this.Blur ? "setBlur" : "", this.Scroll ? "notScroll" : ""]'
        @changeNavType="changeNavType" />
    <footer-component />
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
  blurCss = '';
  scroll = '';
  navigationType = '';

  created(): void {
    this.kakaoInit();
  }

  private kakaoInit(): void {
    window.Kakao.init(process.env.VUE_APP_KAKAO_KEY);
  }

  private changeNavType(type: string): void {
    this.navigationTypeComputed = type;
  }

  private set navigationTypeComputed(type: string) {
    this.navigationType = type;
  }
  private get navigationTypeComputed() {
    return this.navigationType;
  }

  private get Blur() {
    return this.blurCss = this.$store.getters["cssStore/BLUR"];
  }
  private get Scroll() {
    return this.scroll = this.$store.getters['cssStore/SCROLL'];
  }


}
</script>

<style>

/* 아래 항목 : 이벤트에 따른 CSS 적용 */
.setBlur {
  filter: blur(4px);
  width: 100%;
}
.notScroll {
  position: fixed;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.notScroll::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
</style>
