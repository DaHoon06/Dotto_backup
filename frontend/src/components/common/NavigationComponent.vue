<template>
  <nav id="navigation-container">
    <ul>
      <li>
        <article class="menu">
          <ul>
            <li>
              <button
                  class="nav-button" :class="menu_home ? active : ''"
                  @mousemove="showHome('show')"
                  @mouseleave="showHome('hide')">HOME</button>
            </li>
            <li v-show="menu_home">
              <div class="nav-menu-list"
                   @mouseover="showHome('show')"
                   @mouseleave="showHome('hide')">
                <router-link to="/" class="sub-nav-items">menu1</router-link>
                <router-link to="/" class="sub-nav-items">menu2</router-link>
                <router-link to="/" class="sub-nav-items">menu3</router-link>
                <router-link to="/" class="sub-nav-items">menu4</router-link>
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
                  class="nav-button" :class="menu_artist ? active : ''"
                  @mouseover="showArtist('show')"
                  @mouseleave="showArtist('hide')">ARTIST</button>
            </li>
            <li v-show="menu_artist">
              <div class="nav-menu-list"
                   @mouseover="showArtist('show')"
                   @mouseleave="showArtist('hide')">
                <router-link to="/" class="sub-nav-items">menu1</router-link>
                <router-link to="/" class="sub-nav-items">menu2</router-link>
                <router-link to="/" class="sub-nav-items">menu3</router-link>
                <router-link to="/" class="sub-nav-items">menu4</router-link>
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
                  class="nav-button" :class="menu_tattoo ? active : ''"
                  @mouseover="showTattoo('show')"
                  @mouseleave="showTattoo('hide')">try DOTTO</button>
            </li>
            <li v-show="menu_tattoo">
              <div class="nav-menu-list"
                   @mouseover="showTattoo('show')"
                   @mouseleave="showTattoo('hide')" >
                <router-link to="/" class="sub-nav-items">menu1</router-link>
                <router-link to="/" class="sub-nav-items">menu2</router-link>
                <router-link to="/" class="sub-nav-items">menu3</router-link>
                <router-link to="/" class="sub-nav-items">menu4</router-link>
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
                  class="nav-button" :class="menu_community ? active : ''"
                  @mouseover="showCommunity('show')"
                  @mouseleave="showCommunity('hide')">COMMUNITY</button>
            </li>
            <li v-show="menu_community">
              <div class="nav-menu-list"
                   @mouseover="showCommunity('show')"
                   @mouseleave="showCommunity('hide')">
                <router-link to="/" class="sub-nav-items">menu1</router-link>
                <router-link to="/" class="sub-nav-items">menu2</router-link>
                <router-link to="/" class="sub-nav-items">menu3</router-link>
                <router-link to="/" class="sub-nav-items">menu4</router-link>
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
  menu_home = false;
  menu_artist = false;
  menu_tattoo = false;
  menu_community = false;
  active = 'active';

  constructor() {
    super();
  }

  private showHome(event: string) {
    this.menu_home = event === 'show';
  }

  private showArtist(event: string) {
    this.menu_artist = event === 'show';
  }

  private showTattoo(event: string) {
    this.menu_tattoo = event === 'show';

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
  z-index: 10;
}

#navigation-container > ul {
  padding-left: 0;
}

#navigation-container > ul > li {
  float: left;
  margin-right: 20px;
}

.nav-menu-list {
  background: rgba(189, 187, 187, 0.9);
  width: 100px;
  position: absolute;
  margin-left: -1.5rem;
  color: #ffffff;
  text-align: center;
  border-radius: 10px;
  z-index: 10;
}

.nav-button {
  color: #919191;
  padding-left: 5px;
}

.active {
  color: #222222;
  font-weight: bold;
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

.sub-nav-items:hover {
  cursor: pointer;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  padding: 3px 30% 3px 30%;
  color: #222222;
}

</style>