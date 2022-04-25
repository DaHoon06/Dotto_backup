<template>
  <main id="register-container">
    <div id="test">
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
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemberRegisterComponent from "@/components/User/MemberRegisterComponent.vue";
import TattooistRegisterComponent from "@/components/User/TattooistRegisterComponent.vue";
import {
  HeaderComponent,
  FooterComponent,
  NavigationComponent,
  MenuButton
} from "@/components/common";

@Component({
  components: {
    MemberRegisterComponent,
    TattooistRegisterComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    MenuButton
  }
})
export default class RegisterView extends Vue {
  type: number;

  constructor() {
    super();
    this.type = 0;
  }


}
</script>

<style scoped>
#register-container {
  margin:auto;
  display: flex;
  flex-direction: column;

}
#test {
  max-height: 966px;
}

</style>