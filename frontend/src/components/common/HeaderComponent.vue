<template>
  <header id="navBar-container" >

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

      <transition name="fade">
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
      </transition>
    </section>

    <section>
      <div v-if="!isLogin">
        <button id="show-btn" @click="showLoginView" >
          <img class="nav-menu-icon" src="@/assets/nav/information.png" alt="info" />
        </button>
        <span class="nav-icon-label login-label" @click="showLoginView">LOGIN</span>
      </div>
      <div id="isLoginTrue" v-else>

        <div id="alarm-wrapper">
          <img id="alarm" src="@/assets/icons/default_alarm.png" alt="alarm" @click="showAlarm" />
          <div v-if="showMessage" id="alarm-container">
            메세지 영역
          </div>
        </div>

        <div >
          <div id="my-page-container" >
            <div id="my-page" @click="goMyPage">
              <img src="@/assets/icons/default.png" id="my" alt="my" />
              <span id="my_name">NAME</span>
            </div>
            <div id="drop-down-btn-container">
              <span @click="showMenu">
                <img src="@/assets/nav/filter-btn.png" id="drop-down-btn" alt="dropdown" />
              </span>
            </div>
          </div>
          <div v-if="showMyMenu" id="my-menu-list">
            <div id="my-menu-items">
              <div>
                <span>
                  <img src="@/assets/icons/mymenu/dottoDesign.png" alt="design" class="my-menu-icons" />
                </span>
                <router-link to="t">타투도안</router-link>
              </div>
              <div>
                <span>
                  <img src="@/assets/icons/mymenu/reservationList.png" alt="reservation" class="my-menu-icons" />
                </span>
                <router-link to="t">내 예약목록</router-link>
              </div>
              <div>
                <span>
                  <img src="@/assets/icons/mymenu/myReview.png" alt="review" class="my-menu-icons" />
                </span>
                <router-link to="t">내 댓글 / 리뷰</router-link>
              </div>
              <div>
                <span>
                  <img src="@/assets/icons/mymenu/favorites.png" alt="favorites" class="my-menu-icons" />
                </span>
                <router-link to="t">찜한 목록</router-link>
              </div>

              <hr />

              <div>
                <span>
                  <img src="@/assets/icons/mymenu/security.png" alt="security" class="my-menu-icons"/>
                </span>
                <router-link to="t">보안 / 계정</router-link>
              </div>
              <div id="logout" @click="logout">
                <span>
                  <img src="@/assets/icons/mymenu/logout.png" alt="logout" class="my-menu-icons" />
                </span>
                <span>로그아웃</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <transition name="fade">
      <ModalComponent
          :modalType="modalType"
          :showModal="showModal"
          @modalType="modalType"
          @closeModal="closeModal"
      />
    </transition>

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
  showModal = false;
  modalType = '';
  showMessage = false;
  showMyMenu = false;

  constructor() {
    super();
  }

  private closeModal() {
    this.showModal = false;
    this.$emit('notScroll', false);
    this.modalType = '';
  }

  private showLoginView() {
    this.modalType = 'Login';
    this.showModal = true;
    this.notScrollBody();
  }

  private closeSearchList() {
    this.showSearchList = !this.showSearchList;
    this.$emit('blurBackground', false);
  }

  private logout(): void {
    console.log('logout')
  }
  private showAlarm(): boolean {
    this.showMessage = !this.showMessage;
    this.showMyMenu = false;
    return this.showMessage
  }
  private showMenu(): boolean {
    this.showMyMenu = !this.showMyMenu;
    this.showMessage = false;
    return this.showMyMenu
  }

  private goMyPage() {
    this.$router.push('/my');
  }

  @Emit('blurBackground')
  private searchLists() {
    this.showSearchList = !this.showSearchList;
    return this.showSearchList
  }

  @Emit('notScroll')
  private notScrollBody() {
    return true;
  }

}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #222222;
}

ul li {
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}

hr {
  width: 14vw;
  margin: 1rem -1.5em;
}

a:hover, #logout:hover {
  color: #8d8d8d;
  font-weight: 700;

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