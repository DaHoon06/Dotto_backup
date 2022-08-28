<template>
  <transition v-if="this.isModal">
    <article id="modal" ref="modalContainer" @click="closeModalOuter">
      <section
        class="modal-body"
        :class="modalTypeComputed === 'Login' ? '' : 'modal-body-register'"
      >
        <component
          :is="dynamicView"
          @closeModal="closeModal"
          @redirectLoginView="redirectLoginView"
          @redirectHome="redirectHome"
          @modalTypeRegister="changeModalType"
        />
      </section>
    </article>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import TermsComponent from "@/components/member/PolicyComponent.vue";
import { MODAL } from "@/interfaces/common/ICommon";

@Component({
  components: {
    LoginView,
    RegisterView,
    TermsComponent,
  },
})
export default class ModalComponent extends Vue {
  type = "";
  @Prop()
  modalType?: string;
  @Prop()
  showModal?: boolean;

  constructor() {
    super();
  }

  private created() {
    this.init();
  }

  private redirectLoginView(LOGIN: string): void {
    this.modalTypeComputed = LOGIN;
  }
  private redirectHome(HOME: string): void {
    const { path } = this.$router.currentRoute;
    if (path !== HOME) {
      this.$router.push({ path: HOME });
    }
    this.closeModal();
  }

  private init() {
    if (this.modalType === MODAL.REGISTER)
      this.modalTypeComputed = MODAL.REGISTER;
    else this.modalTypeComputed = MODAL.LOGIN;
  }

  private closeModalOuter() {
    window.addEventListener("click", this.resetModal);
  }

  @Emit("closeModal")
  private closeModal() {
    this.modalTypeComputed = MODAL.LOGIN;
  }

  private resetModal(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.parentNode === this.$refs.modalContainer) this.closeModal();
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
      case MODAL.REGISTER:
        return RegisterView;
      case MODAL.LOGIN:
        return LoginView;
    }
  }
}
</script>

<style scoped>
.v-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}

#modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
}

.modal-body {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 600px;
  min-height: 700px;
  max-height: 100%;
  width: 100%;
  height: 50%;
  padding: 30px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transform: translateX(-50%) translateY(-50%);
}
/* 기본 700 , 일반 최대 1019  타투이스트 최대 1112, 완료 700 */
.modal-body-register {
  padding: 0;
}

@media (max-width: 1023px) {

}
@media screen and (max-width: 767px) {
  .modal-body {
    max-width: none;
    max-height:  none;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
