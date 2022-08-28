<template>
  <header id="header">
    <header-component />
    <status-component />
    <navigation-component :navigationType="navigationType" />

    <modal-component
        :modalType="modalType"
        @modalType="modalType"
        @closeModal="closeModal"
    />
    <menu-button id="menu-button" @showMenu="showMenu" />
    <transition>
      <menu-component
        @closeMenu="showMenu"
        v-show="menuComputed"
        id="menu-list"
      />
    </transition>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MenuButton } from "@/components/common";
import HeaderComponent from "@/components/common/top/HeaderComponent.vue";
import NavigationComponent from "@/components/common/top/NavigationComponent.vue";
import StatusComponent from "@/components/common/top/StatusComponent.vue";
import MenuComponent from "@/components/common/top/MenuComponent.vue";
import EventBus from "@/utils/eventBus";
import ModalComponent from "@/components/common/utils/modal/MainModal.vue";
import {MODAL} from "@/interfaces/common/ICommon";
@Component({
  components: {
    HeaderComponent,
    MenuButton,
    NavigationComponent,
    StatusComponent,
    MenuComponent,
    ModalComponent

  },
})
export default class HeaderView extends Vue {
  @Prop({ default: "home" }) navigationType?: string;
  modalType = '';
  menuList = false;

  //CSS 적용
  private blurBackground(isBlur: boolean) {
    this.$emit("blurBackground", isBlur);
  }

  private get menuComputed() {
    return this.menuList;
  }
  private set menuComputed(type: boolean) {
    this.menuList = type;
  }

  private showMenu(type: boolean): void {
    console.log(type);
    this.hideTopScrollButton(type);
    this.menuComputed = type;
  }
  // 메뉴 오픈 시에 맨 위로 버튼 가리기
  hideTopScrollButton(type: boolean): void {
    EventBus.$emit("topScrollButtonControl", !type);
  }
  private closeModal(payload: boolean) {
    this.$store.commit("utilsStore/showModal", payload);
    this.$common.scrollHidden(payload);
    this.modalType = MODAL.INIT;
  }
}
</script>

<style>
#header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 144px;
  left: 0;
  top: 0;
  background: #ffffff;
  z-index: 10;
  flex-direction: column;
  border-bottom: 1px solid #e2e2e2;
}
#menu-button,
#menu-list {
  display: none;
}
@media screen and (max-width: 1023px) {
}
/* 모바일 대응 */
@media screen and (max-width: 767px) {
  .v-enter-active,
  .v-leave-active,
  .v-move {
    transition: opacity 0.3s, transform 0.5s;
  }

  .v-leave-active {
    position: absolute;
    transform: translateY(-50px);
  }
  .v-enter {
    opacity: 0;
    transform: translateY(-50px);
  }

  #header {
    height: 60px;
    flex-direction: row;
    align-items: center;
  }
  #menu-button {
    display: inline-block;
    width: 30px;
    margin-right: 15px;
  }
  #menu-list {
    display: inline-block;
    position: fixed;
    top: 60px;
    width: 100%;
    background: #f5f5f5;
    height: 100vh;
  }
}
</style>
