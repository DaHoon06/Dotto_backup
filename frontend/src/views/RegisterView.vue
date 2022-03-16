<template>
  <div id="register-container">
    <div>
      <b-tabs
          :small="true"
          lazy v-model="type"
          content-class="mt-3"
          active-nav-item-class="font-weight-bold"
          active-tab-class="font-weight-bold text-success"
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
import MemberRegisterComponent from "@/components/MemberRegisterComponent.vue";
import TattooistRegisterComponent from "@/components/TattooistRegisterComponent.vue";

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

  private get currentType() {
    return this.type;
  }

}
</script>

<style scoped>
#register-container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>