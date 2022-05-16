<template>
  <main
      id="modal"
      v-if="showModal"
      ref="modalContainer"
      @click="closeModalOuter">
    <section id="modal-body">
      <component
          :is="dynamicView"
          @modalTypeRegister="changeModalType" />
    </section>
  </main>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

@Component({
  components: {
    LoginView,
    RegisterView
  }
})
export default class ModalComponent extends Vue {
  type = '';
  @Prop()
  modalType?: string;
  @Prop()
  showModal?: boolean;

  constructor() {
    super();
  }

  private created() {
    console.log(this.modalType);
    this.init();
  }

  private init(){
    if (this.modalType === 'Register') {
      this.modalTypeComputed = 'Register';
    } else {
      this.modalTypeComputed = 'Login';
    }
  }


  private closeModalOuter() {
    window.addEventListener('click', this.resetModal);
  }

  private resetModal(e: any) {
    if (e.target.parentNode === this.$refs.modalContainer) {
      this.modalTypeComputed = 'Login';
      this.$emit('closeModal');
    }
  }

  private changeModalType(modalTypeRegister: string) {
    this.modalTypeComputed = modalTypeRegister;
  }

  private set modalTypeComputed(type: string) {
    this.type = type;
  }

  private get modalTypeComputed() {
    return this.type;
  }

  private get dynamicView() {
    switch (this.modalTypeComputed) {
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