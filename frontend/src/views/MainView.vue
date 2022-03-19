<template>
  <div>
    <navigation-component />
    <div id="main-wrapper">
      <side-menu-component />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavigationComponent from "@/components/common/NavigationComponent.vue";
import SideMenuComponent from "@/components/common/SideMenuComponent.vue";

@Component({
  components: {
    NavigationComponent,
    SideMenuComponent
  }
})
export default class MainView extends Vue {

}
</script>

<style scoped>
#main-wrapper {
  margin-top: 60px;
}
</style>