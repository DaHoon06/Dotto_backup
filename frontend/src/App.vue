<template>
  <div id="app">
    <header-view
      :navigationType="navigationTypeComputed"
      :class="topHide ? 'hide' : ''"
    />
    <router-view
      :class="[Blur ? 'setBlur' : '']"
      @changeNavType="changeNavType"
    />
    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderView from "@/views/HeaderView.vue";
import { FooterComponent } from "@/components/common";
import EventBus from "@/utils/eventBus";

@Component({
  components: {
    FooterComponent,
    HeaderView,
  },
})
export default class App extends Vue {
  blurCss = "";
  navigationType = "";

  changeTopMenu = false;

  created(): void {
    this.kakaoInit();
    this.eventListener();
  }
  private get topHide() {
    return this.changeTopMenu;
  }
  private set topHide(type: boolean) {
    this.changeTopMenu = type;
  }
  // EventBus Listen
  private eventListener(): void {
    // 상단 네비게이션 메뉴 변경
    EventBus.$on("topMenuHide", (payload: boolean) => {
      this.topHide = payload;
    });
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
    return (this.blurCss = this.$store.getters["cssStore/BLUR"]);
  }
}
</script>

<style>
/* 아래 항목 : 이벤트에 따른 CSS 적용 */
.setBlur {
  filter: blur(4px);
  width: 100%;
}

.hide {
  display: none !important;
}
</style>
