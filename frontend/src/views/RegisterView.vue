<template>
  <main id="register-container">
    <section id="tab-wrapper">
      <span id="modal-register-close-btn" @click="closeForm">X</span>
      <div class="register-tabs">
        <span @click="changeTab = 0" :class="{ 'currentPage' : changeTab === 0 }" >일반 회원</span>
        <span @click="changeTab = 1" :class="{ 'currentPage' : changeTab === 1 }" >타투이스트 회원</span>
      </div>
    </section>

    <member-register-component v-if="changeTab === 0" />
    <tattooist-register-component v-if="changeTab === 1" />
  </main>
</template>

<script lang="ts">
import {Component, Emit, Vue} from "vue-property-decorator";
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
  type = 0;

  private get changeTab() {
    return this.type;
  }

  private set changeTab(type: number) {
    this.type = type;
  }

  @Emit('closeModal')
  private closeForm() {
    return true
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
  margin-bottom: 3em;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
#tab-wrapper span {
  margin-left: 0.5em;
  text-shadow: 1px 1px 1px #c9c9c9;
}

#tab-wrapper span:hover {
  color: #888888;
  cursor: pointer;
}

#modal-register-close-btn {
  width: 5%;
}
.register-tabs {
  width: 95%;
}

.register-tabs span {
  color: #eeeeee;
}

.register-tabs span:nth-child(1) {
  margin-right: 1.3em;
}

.currentPage {
  font-weight: 700;
  color: #606060 !important;
}

</style>