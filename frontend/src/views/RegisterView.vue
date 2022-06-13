<template>
  <main id="register-container">
    <section id="tab-wrapper">
      <span>회원 가입</span>
    </section>

    <section>
        <progress-component />
    </section>

    <section>
      <component
          :is="dynamicComponent"/>
    </section>

  </main>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import RegisterComponent from "@/components/user/RegisterComponent.vue";
import CompletedComponent from "@/components/user/CompletedComponent.vue";
import PolicyComponent from "@/components/user/PolicyComponent.vue";
import {
  HeaderComponent,
  FooterComponent,
  NavigationComponent,
  MenuButton
} from "@/components/common";
import ProgressComponent from "@/components/user/ProgressComponent.vue";

@Component({
  components: {
    RegisterComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    MenuButton,
    ProgressComponent
  }
})
export default class RegisterView extends Vue {
  type = 'PolicyComponent';

  @Emit('closeModal')
  private closeForm() {
    return true
  }

  private get dynamicComponent() {
    switch (this.type) {
      case 'PolicyComponent':
        return PolicyComponent;
      case 'RegisterComponent':
        return RegisterComponent;
      case 'CompletedComponent':
        return CompletedComponent;
    }
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
  padding-bottom: 10px;
  justify-content: flex-start;
}
#tab-wrapper span {
  margin-left: 0.5em;
  text-shadow: 1px 1px 1px #c9c9c9;
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