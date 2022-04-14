<template>
  <div id="navBar-container">

    <section>
      <ul>
        <li id="menu-button-container">
          <button>
            <img class="menu-icon" src="@/assets/nav/menu.png" alt="menu"  />
          </button>
        </li>
        <li>
          <span>
            <img id="logo" src="@/assets/dotto.jpg" alt="logo" />
          </span>
        </li>
      </ul>
    </section>

    <section id="search-container">
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
        <div id="outer" @click="closeSearchList"/>
      </div>
    </section>

    <section>
      <ul>
        <li>
          <button class="nav-icon-btn">
            <img class="nav-menu-icon" src="@/assets/nav/vector.png" alt="vector" />
          </button>
          <span class="nav-icon-label">MY PAGE</span>
        </li>
        <li>
          <button id="show-btn" @click="$bvModal.show('bv-modal-example')">
            <img class="nav-menu-icon" src="@/assets/nav/information.png" alt="info" />
          </button>
          <span class="nav-icon-label">LOGIN</span>
        </li>
      </ul>
    </section>

    <b-modal id="bv-modal-example" centered hide-header hide-footer>
      <login-view />
    </b-modal>

  </div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator";
import { NavigationComponent } from "@/components/common/index";
import LoginView from "@/views/LoginView.vue";

@Component({
  components: {
    LoginView,
    NavigationComponent
  }
})
export default class HeaderComponent extends Vue {
  showSearchList: boolean;

  constructor() {
    super();
    this.showSearchList = false;
  }

  @Emit('blurBackground')
  private searchLists() {
    this.showSearchList = !this.showSearchList;
    return this.showSearchList

  }

  private closeSearchList() {
    this.showSearchList = !this.showSearchList;
    this.$emit('blurBackground', false);
  }

}
</script>

<style scoped>
ul li {
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 25px;
}

.nav-menu-icon:nth-child(1) {
  margin-right: 30px;
}

.nav-icon-label {
  font-size: 11px;
  color: #919191;
  margin-right: 15px;
}

.nav-icon-btn {
  width: 40px;
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

#menu-button-container > button > img {
  width: 34px;
  margin-top: 4px;
}

#menu-button-container {
  display: none;
}

@media screen and (max-width: 1260px) {
  #menu-button-container {
    display: inline;
  }
}
@media screen and (max-width: 500px){
  #search-container {
    display: none;
  }
}

</style>