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
      <input type="text" placeholder="Search" @click="searchLists" id="navigation-search-bar" />
      <button>
        <img class="side-menu-drop-btn" id="search-btn" src="@/assets/nav/search.png" alt="search" />
      </button>
      <div v-if="showSearchList" id="search-list">
        <div id="search-list-wrapper">
          <p class="close-search-list"><button @click="closeSearchList">x</button></p>
          <ul>
            <li>
              <span>홍대</span>
              <span>03.26</span>
              <span>x</span>
            </li>
          </ul>
        </div>
        <div id="outer" />
      </div>
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
import { NavigationComponent } from "@/components/common/index";

@Component({
  components: {
    MenuButton,
    NavigationComponent
  }
})
export default class HeaderComponent extends Vue {
  showMenuList: boolean;
  showSearchList: boolean;

  propCss: string;

  constructor() {
    super();
    this.showMenuList = false;
    this.showSearchList = false;
    this.propCss = `filter: blur(5px)`;
  }

  private showMenu() {
    this.showMenuList = !this.showMenuList;
  }

  private searchLists() {
    if (this.showSearchList) this.$emit('blurBackground', this.propCss)
    this.showSearchList = !this.showSearchList;
  }

  private closeSearchList() {
    this.showSearchList = !this.showSearchList;
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
#navigation-search-bar {
  width: 200px;
  height: 25px;
  border: 1px solid #ececec;
  border-radius: 4px;
  background: #F5F5F5;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 10px;
}

#search-btn {
  position: relative;
  right: 24px;
  width: 15px;
}

#search-list {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  max-width: 1980px;
}

#search-list-wrapper {
  display: inline-block;
  width: 100%;
  height: 30vh;
  background: #FFFFFF;
}

#outer {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3)
}

</style>