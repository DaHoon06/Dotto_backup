<template>
  <main id="register-container">
    <section id="tab-wrapper">
      <span id="modal-register-close-btn">X</span>
      <div class="register-tabs">
        <span @click="changeTab = 0" >일반 회원</span>
        <span @click="changeTab = 1" >타투이스트 회원</span>
      </div>
    </section>
    <member-register-component v-if="this.changeTab === 0" />
    <tattooist-register-component v-if="this.changeTab === 1"  />
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
  height: 100%;

}
#tab-wrapper {
  display: flex;
}
#tab-wrapper span {
  margin-left: 0.5em;
}
#tab-wrapper div span:nth-child(1)::after {
  content: '|';
  font-weight: 500;
}
#tab-wrapper span:hover {
  color: #E2E2E2;
  cursor: pointer;
}
#modal-register-close-btn {

}
.register-tabs {
  margin-left: 7em;
}

</style>