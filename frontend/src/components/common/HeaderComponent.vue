<template>
  <header id="navBar-container" >

    <section>
      <ul>
        <li id="menu-button-container">
          <button>
            <img class="menu-icon" src="@/assets/icons/nav/menu.png" alt="menu"  />
          </button>
        </li>
        <li>
          <span>
            <a href="/"><img id="logo" src="@/assets/img/dotto.svg" alt="logo" /></a>
          </span>
        </li>
      </ul>
    </section>

<!--    <section>-->
<!--      <div id="menu-button-container">-->
<!--        <button>-->
<!--          <img class="menu-icon" src="@/assets/icons/nav/menu.png" alt="menu"  />-->
<!--        </button>-->
<!--      </div>-->
<!--      <div>-->
<!--        <span>-->
<!--          <a href="/"><img id="logo" src="@/assets/img/dotto.svg" alt="logo" /></a>-->
<!--        </span>-->
<!--      </div>-->
<!--    </section>-->

    <section id="search-container">
      <input type="text" placeholder="Search" @click="searchLists" id="navigation-search-bar" />
      <button id="search-btn" >
        <img class="side-menu-drop-btn" src="@/assets/icons/nav/search.svg" alt="search" />
      </button>

      <transition name="fade">
        <article v-show="showSearchList" id="search-list">
          <div id="search-list-wrapper">
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
      <div v-if="showSearchList" class="close-search-list" >
        <button @click="closeSearchList">
          <img src="@/assets/icons/nav/close.png" id="close-img" alt="close" />
        </button>
      </div>
      <div v-else>
        <div>
          <div v-if="!isLogin">
            <button id="show-btn" @click="showLoginView" >
              <img class="nav-menu-icon" src="@/assets/icons/nav/information.png" alt="info" />
            </button>
            <span class="nav-icon-label login-label" @click="showLoginView">LOGIN</span>
          </div>
          <div id="isLoginTrue" v-else>
            <div id="alarm-wrapper">
              <img id="alarm" src="@/assets/icons/default_alarm.svg" alt="alarm" @click="showAlarm" />
              <div v-if="showMessage" id="alarm-container">
                메세지 영역
              </div>
            </div>
            <div id="my-page-container" >
              <div id="my-page" @click="goMyPage">
                <img src="@/assets/icons/default.svg" id="my" alt="my" />
                <span id="my_name">NAME</span>
              </div>
              <div id="drop-down-btn-container">
                <span @click="showMenu">
                  <img src="@/assets/icons/nav/filter-btn.svg" id="drop-down-btn" alt="dropdown" />
                </span>
              </div>
            </div>
            <div v-if="showMyMenu" id="my-menu-list">
              <div id="my-menu-items">
                <div>
                  <span>
                    <img src="@/assets/icons/mymenu/dottoDesign.svg" alt="design" class="my-menu-icons" />
                  </span>
                  <router-link to="t">타투도안</router-link>
                </div>
                <div>
                  <span>
                    <img src="@/assets/icons/mymenu/reservationList.svg" alt="reservation" class="my-menu-icons" />
                  </span>
                  <router-link to="t">내 예약목록</router-link>
                </div>
                <div>
                  <span>
                    <img src="@/assets/icons/mymenu/myReview.svg" alt="review" class="my-menu-icons" />
                  </span>
                  <router-link to="t">내 댓글 / 리뷰</router-link>
                </div>
                <div>
                  <span>
                    <img src="@/assets/icons/mymenu/favorites.svg" alt="favorites" class="my-menu-icons" />
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
                    <img src="@/assets/icons/mymenu/logout.svg" alt="logout" class="my-menu-icons" />
                  </span>
                  <span>로그아웃</span>
                </div>
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
/* 로고 */
#logo {
  margin-left: 25px;
  margin-bottom: 10px;
  width: 103px;
  height: 40px;
  left: 4px;
  top: 0;
}

#close-img {
  width: 16px;
  height: 16px;
}

/* 검색창 */
#search-container {
  width: 588px;
  height: 40px;
}
#navigation-search-bar {
  width: 90%;
  height: 100%;
  border: 1px solid #ececec;
  outline: none;
  background: #F5F5F5;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
}
#search-btn {
  position: relative;
  right: 35px;
  bottom: 5px;
  width: 24px;
  height: 24px;
}

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