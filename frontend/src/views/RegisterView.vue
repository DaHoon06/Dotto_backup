<template>
  <main id="register-container">
    <section id="tab-wrapper">
      <span id="modal-register-close-btn" @click="closeForm">X</span>
    </section>

    <member-register-component />

  </main>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import MemberRegisterComponent from "@/components/user/MemberRegisterComponent.vue";
import {
  HeaderComponent,
  FooterComponent,
  NavigationComponent,
  MenuButton
} from "@/components/common";

@Component({
  components: {
    MemberRegisterComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    MenuButton
  }
})
export default class RegisterView extends Vue {


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
  justify-content: flex-end;
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