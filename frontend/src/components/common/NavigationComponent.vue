<template>
  <div id="navigation-container">
    <ul>
      <li>
        <span>HOME</span>
      </li>
      <li>
        <span>ARTIST</span>
      </li>
      <li>
        <span>TATTOO</span>
      </li>
      <li>
        <span>COMMUNITY</span>
      </li>
      <li>
        <span>MY</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavigationComponent extends Vue {

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
</style>