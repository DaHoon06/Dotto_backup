<template>
  <section id="progress-container">
    <div class="progress-items-wrapper">
      <span
          class="progress-items"
          :class="progress === 1 ? 'active-progress' : ''">1</span>
      <span
          class="progress-items-title"
          :class="progress === 1 ? 'active-progress-title' : ''"
      >약관동의</span>
    </div>
    <div class="progress-items-dot-wrapper">
      <span class="progress-items-dot"></span>
    </div>
    <div class="progress-items-dot-wrapper">
      <span class="progress-items-dot"></span>
    </div>
    <div class="progress-items-wrapper">
      <span
          class="progress-items"
          :class="progress === 2 ? 'active-progress' : ''">2</span>
      <span
          class="progress-items-title"
          :class="progress === 2 ? 'active-progress-title' : ''"
      >본인인증</span>
    </div>
    <div class="progress-items-dot-wrapper">
      <span class="progress-items-dot"></span>
    </div>
    <div class="progress-items-dot-wrapper">
      <span class="progress-items-dot"></span>
    </div>
    <div class="progress-items-wrapper">
      <span
          class="progress-items"
          :class="progress === 3 ? 'active-progress' : ''">3</span>
      <span
          class="progress-items-title"
          :class="progress === 3 ? 'active-progress-title' : ''"
      >가입완료
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProgressComponent extends Vue {
  @Prop() private progress?: number;

}
</script>

<style scoped>
#progress-container {
  display: flex;
  justify-content: center;
  margin-bottom: 91px;
}

.progress-items-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-items {
  color: #919191;
  font-size: 12px;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #E2E2E2;
  border-radius: 30px;
  padding-top: 10px;
}
.progress-items-title {
  color: #919191;
  font-size: 12px;
}

.progress-items-dot-wrapper {
  margin: 4px 4px 0 4px;
}
.progress-items-dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #E2E2E2;
  border-radius: 30px;
}
.active-progress {
  background: #222222;
  color: #FFFFFF;
}

.active-progress-title {
  color: #222222;
}
</style>