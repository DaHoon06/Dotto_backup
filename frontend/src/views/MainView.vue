<template>
  <div>
    <navigation-component />
    TEST
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavigationComponent from "@/components/common/NavigationComponent.vue";

@Component({
  components: {
    NavigationComponent
  }
})
export default class MainView extends Vue {

}
</script>

<style scoped>

</style>