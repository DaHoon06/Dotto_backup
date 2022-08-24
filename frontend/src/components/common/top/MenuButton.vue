<template>
  <article id="menu-button-container">
    <section class="menu-button-wrapper">
      <button type="button" @click="showMenu" id="menu-btn">
        <img src="@/assets/icons/nav/menu.png" alt="메뉴" />
      </button>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class MenuButton extends Vue {
  showMenuList = false;

  @Emit("showMenu")
  private showMenu() {
    this.$common.scrollHidden(!this.showMenuList);
    return (this.showMenuList = !this.showMenuList);
  }
}
</script>

<style scoped>
@media screen and (max-width: 1023px) {
}
/* 모바일 대응 */
@media screen and (max-width: 767px) {
  #menu-button-container {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }

  nav {
    margin-top: 50px;
  }
  #menu-btn {
    width: 100% !important;
  }
  .menu-button-wrapper {
    margin-right: 15px;
    width: 100% !important;
  }

  button > img {
    width: 100% !important;
  }
}
</style>
