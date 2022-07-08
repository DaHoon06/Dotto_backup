<template>
  <button
    class="register-common-btn"
    :class="registerProcess ? activeBtn: ''"
    type="button">
    {{ buttonLabelComputed }}
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class RegisterButton extends Vue {
  @Prop() buttonType?: string;
  @Prop({ default: false }) next?: boolean;
  @Prop({ default: false }) nextProcess?: boolean;

  openBtn = this.$store.getters["utilsStore/next"];
  activeBtn = 'register-common-btn-active';
  test = false;
  label = '';

  mounted(): void {
    this.buttonName();
    console.log(this.nextProcess)
  }

  private buttonName() {
    switch (this.buttonType+'') {
      case '1':
        this.buttonLabelComputed = '이전';
        break;
      case '2':
        this.buttonLabelComputed = '가입';
        break;
      case '3':
        break;
    }
  }

  private get buttonLabelComputed() {
    return this.label;
  }
  private set buttonLabelComputed(label: string) {
    this.label = label;
  }

  private set registerProcess(type: boolean) {
    this.test = this.$store.getters["utilsStore/next"];
  }
  private get registerProcess() {
    return this.test
  }

  private btnActive() {
    this.openBtn = !this.next;
  }

  // 약관 동의 화면
  @Emit('changeComponent')
  private redirectRegisterForm(): string {
    if (this.next) {
      alert('필수 선택사항을 체크해 주세요.');
      return 'PolicyComponent';
    } else {
      return 'RegisterComponent';
    }
  }

  @Emit('redirectLoginView')
  private redirectLoginForm(): string {
    return 'Login';
  }

}
</script>

<style scoped>

.register-common-btn {
  width: 130px;
  height: 42px;
  border-radius: 4px;
}
.register-common-btn-active {
  background: #222222!important;
  color: #eeeeee!important;
}
.register-common-btn:nth-child(1) {
  border: 3px solid #f3f3f3;
  margin-right: 1em;
}
.register-common-btn:nth-child(2) {
  background: #F5F5F5;
  color: #696969;
}
.register-common-btn:nth-child(1):hover {
  background: #f6f6f6;
  border: 1px solid #f6f6f6;
}
.register-common-btn-active:nth-child(2):hover {
  background: #595959 !important;
}
</style>