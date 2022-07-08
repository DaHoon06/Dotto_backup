<template>
  <button
    class="register-common-btn"
    :class="registerProcessComputed ? activeBtn: ''"
    type="button"
    @click="pageController"
  >
    {{ buttonLabelComputed }}
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import EventBus from "@/utils/eventBus";

@Component
export default class RegisterButton extends Vue {
  @Prop() buttonType?: string;

  activeBtn = 'register-common-btn-active';
  registerProcess = false;
  label = '';

  mounted(): void {
    this.buttonName();
    EventBus.$on('next',this.nextProcess);
  }

  private nextProcess(next: boolean) {
    // 가입 버튼만 active
    if (this.buttonType+'' === '2') this.registerProcessComputed = next;
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

  private set registerProcessComputed(type: boolean) {
    this.registerProcess = type;
  }
  private get registerProcessComputed() {
    return this.registerProcess;
  }

  // 화면 전환
  private pageController() {
    switch (this.buttonType+'') {
      case '1':
        this.redirectLoginForm();
        break;
      case '2':
        this.redirectRegisterForm();
        break;
      case '3':
        break;
    }
  }

  // 약관 동의 화면
  @Emit('changeComponent')
  private redirectRegisterForm(): string {
    if (this.registerProcess) {
      //'PolicyComponent';
      return 'RegisterComponent';
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