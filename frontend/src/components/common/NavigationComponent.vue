<template>
  <nav id="navigation-container">
    <ul>
      <li>
        <button
            class="nav-button"
            @mousemove="showHome('show')"
            @mouseleave="showHome('hide')">HOME</button>
        <div class="nav-menu-list"
             v-show="menu_home"
             @mouseover="showHome('show')"
             @mouseleave="showHome('hide')">
          <p><a>menu1</a></p>
          <p><a>menu2</a></p>
          <p><a>menu3</a></p>
          <p><a>menu4</a></p>
        </div>
      </li>
      <li>
        <button
            class="nav-button"
            @mouseover="showArtist('show')"
            @mouseleave="showArtist('hide')">ARTIST</button>
        <div class="nav-menu-list"
             v-show="menu_artist"
             @mouseover="showArtist('show')"
             @mouseleave="showArtist('hide')">
          <p><a>menu1</a></p>
          <p><a>menu2</a></p>
          <p><a>menu3</a></p>
          <p><a>menu4</a></p>
        </div>
      </li>
      <li>
        <button
            class="nav-button"
            @mouseover="showTattoo('show')"
            @mouseleave="showTattoo('hide')">TATTOO</button>
        <div class="nav-menu-list"
             v-show="menu_tattoo"
             @mouseover="showTattoo('show')"
             @mouseleave="showTattoo('hide')" >
          <p><a>menu1</a></p>
          <p><a>menu2</a></p>
          <p><a>menu3</a></p>
          <p><a>menu4</a></p>
        </div>
      </li>
      <li>
        <button
            class="nav-button"
            @mouseover="showCommunity('show')"
            @mouseleave="showCommunity('hide')">COMMUNITY</button>
        <div class="nav-menu-list"
             v-show="menu_community"
             @mouseover="showCommunity('show')"
             @mouseleave="showCommunity('hide')">
          <p><a>menu1</a></p>
          <p><a>menu2</a></p>
          <p><a>menu3</a></p>
          <p><a>menu4</a></p>
        </div>
      </li>
      <li>
        <button
            class="nav-button"
            @mouseover="showMy('show')"
            @mouseleave="showMy('hide')">MY</button>
        <div class="nav-menu-list"
             v-show="menu_my"
             @mouseover="showMy('show')"
             @mouseleave="showMy('hide')">
          <p><a>menu1</a></p>
          <p><a>menu2</a></p>
          <p><a>menu3</a></p>
          <p><a>menu4</a></p>
        </div>
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
  menu_my = false;

  constructor() {
    super();
  }

  private showHome(event: string) {
    if (event === 'show') this.menu_home = true;
    else if (event === 'hide') this.menu_home = false;
  }

  private showArtist(event: string) {
    if (event === 'show') this.menu_artist = true;
    else if (event === 'hide') this.menu_artist = false;
  }

  private showTattoo(event: string) {
    if (event === 'show') this.menu_tattoo = true;
    else if (event === 'hide') this.menu_tattoo = false;
  }

  private showCommunity(event: string) {
    if (event === 'show') this.menu_community = true;
    else if (event === 'hide') this.menu_community = false;
  }

  private showMy(event: string) {
    if (event === 'show') this.menu_my = true;
    else if (event === 'hide') this.menu_my = false;
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
  z-index: 10;
  padding-left: 25px;
  font-size: 13px;
  color: #919191;
}
#navigation-container ul li {
  float: left;
  margin-right: 20px;
}

.nav-menu-list {
  background: rgba(114, 112, 112, 0.9);
  width: 100px;
  position: relative;
  display: inline;
  text-align: center;
  border-radius: 10px;
  z-index: 10;
}

.nav-button {
  color: #919191;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
}


</style>