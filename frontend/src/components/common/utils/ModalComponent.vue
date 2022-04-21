<template>
  <main id="modal" v-if="showModal">
    <section id="modal-body">
      <component
          :is="dynamicView"
          @modalType="changeModalType"/>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

@Component({
  components: {
    LoginView,
    RegisterView
  }
})
export default class ModalComponent extends Vue {
  @Prop()
  modalType?: string;
  @Prop()
  showModal?: boolean;

  constructor() {
    super();
  }

  private closeModalOuter() {
    this.showModal = false;
  }

  private changeModalType() {
    this.modalType = 'Register'
  }

  get dynamicView() {
    switch (this.modalType) {
      case 'Register':
        return RegisterView;
      case 'Login':
        return LoginView
    }
  }
}
</script>

<style scoped>
#modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
}

#modal-body {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 550px;
  padding: 30px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translateX(-50%) translateY(-50%);
}
</style>