<template>
  <div id="navBar-container">
    <section>
      <ul>
        <li>
          <button>
            <img class="menu-icon" src="@/assets/nav/menu.png" alt="menu" @click="showMenu" />
          </button>
        </li>
        <li>
          <span>
            <img id="logo" src="@/assets/dotto.jpg" alt="logo" />
          </span>
        </li>
      </ul>
    </section>

    <section>
      <ul>
        <li>
          <button>
            <img class="nav-menu-icon" src="@/assets/nav/information.png" alt="info" />
          </button>
        </li>
        <li>
          <button>
            <img class="nav-menu-icon" src="@/assets/nav/vector.png" alt="vector" />
          </button>
        </li>
      </ul>
    </section>

    <menu-button :showMenuList="showMenuList" @showMenu="showMenu" />


  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuButton from "@/components/common/MenuButton.vue";

@Component({
  components: {
    MenuButton,
  }
})
export default class NavigationComponent extends Vue {
  showMenuList: boolean;

  constructor() {
    super();
    this.showMenuList = false;
  }

  private showMenu() {
    this.showMenuList = !this.showMenuList;
  }

}
</script>

<style scoped>
ul li {
  float: left;
}

#navBar-container {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1980px;
  width: 100%; /* 1980px */
  height: 60px;
  left: 0;
  top: 0;
  background: #FFFFFF;
  z-index: 10;
}
.nav-menu-icon {
  width: 30px;
}
.nav-menu-icon:nth-child(1) {
  margin-right: 30px;
}

.menu-icon {
  margin-top: 7px;
  width: 30px;
}
#logo {
  margin-left: 25px;
  margin-bottom: 10px;
  width: 90px;
  height: 40px;
  left: 4px;
  top: 0;
}


</style>