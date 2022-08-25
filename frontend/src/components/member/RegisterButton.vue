<template>
  <button
    class="register-common-btn"
    :class="registerProcessComputed ? activeBtn : ''"
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
  @Prop({ default: "0" }) buttonLabel?: string;
  @Prop({ default: "" }) buttonType!: string;

  activeBtn = "register-common-btn-active";
  registerProcess = false;
  label = "";

  mounted(): void {
    this.buttonName();
    EventBus.$on("next", this.nextProcess);
  }

  private nextProcess(next: boolean) {
    // 가입 버튼만 active
    if (this.buttonLabel === "2") this.registerProcessComputed = next;
  }

  private buttonName() {
    switch (this.buttonLabel) {
      case "1":
        this.buttonLabelComputed = "이전";
        break;
      case "2":
        this.buttonLabelComputed = "다음";
        break;
      case "3":
        this.buttonLabelComputed = "다음";
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
    switch (this.buttonType) {
      case "policy":
        if (this.buttonLabel === "1") this.$emit("closeModal");
        else this.$emit("changeComponent", "RegisterComponent");
        break;
      case "register":
        if (this.buttonLabel === "1") {
          this.$emit("changeComponent", "PolicyComponent");
        } else this.$emit("changeComponent", "CompletedComponent");
        break;
      case "completed":
        if (this.buttonLabel === "1")
          this.$emit("changeComponent", "RegisterComponent");
        else this.redirectLoginForm();
        break;
    }
  }
  @Emit("closeModal")
  closeModal(): boolean {
    return true;
  }

  @Emit("redirectLoginView")
  private redirectLoginForm(): string {
    return "Login";
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
  background: #222222 !important;
  color: #eeeeee !important;
}
.register-common-btn:nth-child(1) {
  border: 1px solid #f3f3f3;
  margin-right: 1em;
}
.register-common-btn:nth-child(2) {
  background: #f5f5f5;
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
