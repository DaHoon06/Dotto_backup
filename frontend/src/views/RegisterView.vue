<template>
  <div id="register-container" class="shadow pt-5 pb-5">
    <div>
      <b-tabs
          :small="true"
          lazy v-model="type"
          content-class="mt-3"
          active-nav-item-class="font-weight-bold"
          active-tab-class="font-weight-bold"
          align="center">
        <b-tab title="일반 회원" active />
        <b-tab title="타투이스트 회원" />
      </b-tabs>
    </div>
    <member-register-component v-if="this.type === 0" />
    <tattooist-register-component v-if="this.type === 1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemberRegisterComponent from "@/components/User/MemberRegisterComponent.vue";
import TattooistRegisterComponent from "@/components/User/TattooistRegisterComponent.vue";

@Component({
  components: {
    MemberRegisterComponent,
    TattooistRegisterComponent
  }
})
export default class RegisterView extends Vue {
  type: number;

  constructor() {
    super();
    this.type = 0;
  }

  // private get currentType() {
  //   return this.type;
  // }

}
</script>

<style scoped>
#register-container {
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  max-width: 1280px;
  max-height: 1080px;
  height: 100%;
  width: 60%;
  margin: 5rem auto 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>