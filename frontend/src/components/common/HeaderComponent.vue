<template>
  <header id="navBar-container">

    <section>
      <ul>
        <li id="menu-button-container">
          <button>
            <img class="menu-icon" src="@/assets/nav/menu.png" alt="menu"  />
          </button>
        </li>
        <li>
          <span>
            <a href="/"><img id="logo" src="@/assets/dotto.jpg" alt="logo" /></a>
          </span>
        </li>
      </ul>
    </section>

    <section id="search-container">
      <input type="text" placeholder="Search" @click="searchLists" id="navigation-search-bar" />
      <button>
        <img class="side-menu-drop-btn" id="search-btn" src="@/assets/nav/search.png" alt="search" />
      </button>
      <article v-show="showSearchList" id="search-list">
        <div id="search-list-wrapper">
          <div class="close-search-list" >
            <button @click="closeSearchList">x</button>
          </div>
          <p id="empty-search-lists">검색된 검색어가 존재하지 않습니다.</p>
          <ul>
            <li>
            </li>
          </ul>
        </div>
        <div id="outer" @click="closeSearchList"/>
      </article>
    </section>

    <section>
      <ul>
        <li v-if="this.isLogin">
          <button id="show-btn" @click="showLoginView" >
            <img class="nav-menu-icon" src="@/assets/nav/information.png" alt="info" />
          </button>
          <span class="nav-icon-label">LOGIN</span>
        </li>
        <li v-else>
          <div id="my-page">
            <img src="@/assets/nav/vector.png" alt="my" />
          </div>
          <span><small>NAME</small></span>
        </li>
      </ul>
    </section>

    <ModalComponent
        :modalType="modalType"
        :showModal="showModal"
        @modalType="modalType"
        @closeModal="closeModal" />

  </header>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { NavigationComponent } from "@/components/common/index";
import LoginView from "@/views/LoginView.vue";
import ModalComponent from "@/components/common/utils/ModalComponent.vue";

@Component({
  components: {
    ModalComponent,
    LoginView,
    NavigationComponent
  }
})
export default class HeaderComponent extends Vue {
  showSearchList = false;
  modalType = '';
  showModal = false;

  constructor() {
    super();
  }

  @Emit('blurBackground')
  private searchLists() {
    this.showSearchList = !this.showSearchList;
    return this.showSearchList
  }

  private closeModal() {
    this.showModal = false;
    this.modalType = '';
  }

  private showLoginView() {
    this.modalType = 'Login';
    this.showModal = true;
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

#my-page {
  border-radius: 45px;
  background: #F5F5F5;
  width: 45px;
  height: 45px;
  margin: 20px 20px 0 0;
}
#my-page > img {
  display: block;
  width: 20px;
  margin: 12px auto;
  text-align: center;
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
  text-align: center;
}

#search-list-wrapper {
  display: inline-block;
  width: 100vw;
  height: 30vh;
  background: #FFFFFF;
}

#outer {
  width: 100vw;
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

#empty-search-lists {
  margin-top: 1rem;
  font-weight: 600;
}

.close-search-list {
  display: flex;
  justify-content: flex-end;
  padding-top: 3rem;
  margin-right: 3rem;
  font-size: 20px;
  font-weight: 600;
}

@media screen and (max-width: 1260px) {
  #menu-button-container {
    display: inline;
  }
}

@media screen and (max-width: 869px){
  #search-container {
    display: none;
  }
}

</style>