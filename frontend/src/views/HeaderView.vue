<template>
  <header id="header">
    <header-component
        @blurBackground="blurBackground"
        @notScroll="notScrollBody" />
    <navigation-component
        :navigationType="navigationType"
    />
    <menu-button />
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  HeaderComponent,
  MenuButton,
  NavigationComponent } from "@/components/common";

@Component({
  components: {
    HeaderComponent,
    MenuButton,
    NavigationComponent
  }
})
export default class HeaderView extends Vue {
  @Prop({ default: 'home' }) navigationType?: string;

  //CSS 적용
  private blurBackground(isBlur: boolean) {
    this.$emit('blurBackground', isBlur);
  }
  private notScrollBody(scrollEvent: boolean) {
    this.$emit('notScrollBody', scrollEvent);
  }

}
</script>

<style >

</style>