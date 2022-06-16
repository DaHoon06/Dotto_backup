<template>
  <nav id="navigation-container">
    <ul>
      <li>
        <article class="menu">
          <ul>
            <li>
              <span
                  class="nav-button"
                  :class="navigationType === 'home' ? currentPage : ''"
                  @click="changeNavigationType('home')">
                <router-link to="/" v-bind:activeNav="navigationType">HOME</router-link>
              </span>
            </li>
          </ul>
        </article>
      </li>
      <li>
        <article class="menu">
          <ul>
            <li>
              <span
                  class="nav-button"
                  :class="navigationType === 'try' ? currentPage : ''"
                  @click="changeNavigationType('try')"
              >
                <router-link to="/" v-bind:activeNav="navigationType">try DOTTO</router-link>
              </span>
            </li>
          </ul>
        </article>
      </li>
      <li>
        <article class="menu">
          <ul>
            <li>
              <span
                  class="nav-button"
                  :class="navigationType === 'community' ? currentPage : ''"
                  @mouseover="showCommunity('show')"
                  @mouseleave="showCommunity('hide')">COMMUNITY</span>
            </li>
            <li v-show="menu_community">
              <div class="nav-menu-list"
                   @mouseover="showCommunity('show')"
                   @mouseleave="showCommunity('hide')">
                <router-link
                    to="/dotto/board/index"
                    class="sub-nav-items"
                    @changeNavType="changeNavType"
                    @click="changeNavigationType('community')"
                >닷투 게시판</router-link>
                <router-link
                    to="/"
                    class="sub-nav-items"
                    v-bind:activeNav="navigationType"
                >닷찾사 게시판</router-link>
              </div>
            </li>
          </ul>
        </article>
      </li>
      <li>
        <article class="menu">
          <ul>
            <li>
              <span
                  class="nav-button"
                  :class="navigationType === 'support' ? currentPage : ''"
                  @mouseover="showInformation('show')"
                  @mouseleave="showInformation('hide')">고객지원</span>
            </li>
            <li v-show="menu_information">
              <div class="nav-menu-list"
                   @mouseover="showInformation('show')"
                   @mouseleave="showInformation('hide')">
                <router-link
                    to="/"
                    class="sub-nav-items"
                    @click="changeNavigationType('support')"
                >FAQ</router-link>
                <router-link
                    to="/"
                    class="sub-nav-items"
                    @click="changeNavigationType('support')"
                >공지사항</router-link>
              </div>
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavigationComponent extends Vue {
  @Prop() navigationType?: string;

  menu_information = false;
  menu_community = false;
  currentPage = 'current-page';

  constructor() {
    super();
  }

  private showInformation(event: string) {
    this.menu_information = event === 'show';
  }

  private showCommunity(event: string) {
    this.menu_community = event === 'show';
  }

  private changeNavigationType(navType: string) {
    this.navigationType = navType;
  }

  private changeNavType(type: string) {
    console.log('??')
    console.log(type)
  }



}
</script>

<style scoped>
#navigation-container {
  width: 100%;
  position: fixed;
  background: #FFFFFF;
  top: 60px;
  height: 40px;
  border-bottom: 2px solid #F5F5F5;
  padding-left: 20px;
  font-size: 13px;
  color: #919191;
  z-index: 5;
}

#navigation-container > ul {
  padding-left: 0;
}

#navigation-container > ul > li {
  float: left;
  margin-right: 20px;
}

.nav-menu-list {
  background: rgba(255, 255, 255, 0.9);
  width: 130px;
  height: 80px;
  position: absolute;
  margin-left: -1.3rem;
  color: #ffffff;
  text-align: center;
  border-radius: 2px;
  z-index: 10;
  font-size: 12px;
}

.sub-nav-items:hover {
  cursor: pointer;
  font-size: 12px;
  background: rgba(250, 250, 250, 0.7);
  border-radius: 2px;
  padding: 3px 10% 3px 10%;
  color: #222222;
}


.nav-button {
  color: #919191;
  padding-left: 5px;
}

.current-page {
  color: #222222;
  font-weight: bold;
  text-shadow: 1px 1px #a9a9a9;
}

.nav-button:hover {
  color: #222222;
}

.menu > ul > li {
  float: none;
  margin-right: -15px;
}

.sub-nav-items {
  color: #919191;
  display: block;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
}


</style>