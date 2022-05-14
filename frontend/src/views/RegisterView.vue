<template>
  <main id="register-container">
    <section id="tab-wrapper">
      <span @click="changeTab = 0" :class="{ 'active': actV === 0 }">일반 회원</span>
      <span @click="changeTab = 1" :class="{ 'active': actV === 1 }">타투이스트 회원</span>
    </section>
    <member-register-component v-if="this.changeTab === 0" v-bind:actV = '0' />
    <tattooist-register-component v-if="this.changeTab === 1" v-bind:actV = '1' />
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

  private get changeTab() {
    return this.type;
  }

  private set changeTab(type: number) {
    this.type = type;
  }


}
</script>

<style scoped>
#register-container {
  margin:auto;
  display: flex;
  flex-direction: column;

}
#tab-wrapper {

}
#tab-wrapper span {
  margin-left: 0.5em;
}
#tab-wrapper span:first-child::after {
  content: '|';
  font-weight: 500;
}
#tab-wrapper span:hover {
  color: #E2E2E2;
  cursor: pointer;
}

</style>