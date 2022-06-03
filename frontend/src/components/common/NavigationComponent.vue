<template>
  <nav id="navigation-container">
    <ul>
      <li>
        <article class="menu">
          <ul>
            <li>
              <button
                  class="nav-button" :class="menu_home ? currentPage : ''">HOME</button>
            </li>
          </ul>
        </article>
      </li>
      <li>
        <article class="menu">
          <ul>
            <li>
              <button
                  class="nav-button" :class="menu_tattoo ? currentPage : ''">try DOTTO</button>
            </li>
          </ul>
        </article>
      </li>
      <li>
        <article class="menu">
          <ul>
            <li>
              <button
                  class="nav-button" :class="menu_community ? currentPage : ''"
                  @mouseover="showCommunity('show')"
                  @mouseleave="showCommunity('hide')">COMMUNITY</button>
            </li>
            <li v-show="menu_community">
              <div class="nav-menu-list"
                   @mouseover="showCommunity('show')"
                   @mouseleave="showCommunity('hide')">
                <router-link to="/" class="sub-nav-items">닷투 게시판</router-link>
                <router-link to="/" class="sub-nav-items">닷찾사 게시판</router-link>
              </div>
            </li>
          </ul>
        </article>
      </li>
      <li>
        <article class="menu">
          <ul>
            <li>
              <button
                  class="nav-button" :class="menu_information ? currentPage : ''"
                  @mouseover="showInformation('show')"
                  @mouseleave="showInformation('hide')">고객지원</button>
            </li>
            <li v-show="menu_information">
              <div class="nav-menu-list"
                   @mouseover="showInformation('show')"
                   @mouseleave="showInformation('hide')">
                <router-link to="/" class="sub-nav-items">FAQ</router-link>
                <router-link to="/" class="sub-nav-items">공지사항</router-link>
              </div>
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavigationComponent extends Vue {
  menu_home = true;
  menu_information = false;
  menu_tattoo = false;
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

}
</script>

<style scoped>
#navigation-container {
  width: 100%;
  position: fixed;
  background: #FFFFFF;
  top: 60px;
  height: 40px;
  border-bottom: 2px solid gray;
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