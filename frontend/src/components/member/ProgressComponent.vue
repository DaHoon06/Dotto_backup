<template>
  <article id="progress-container">
    <section class="progress-items-wrapper">
      <h1
        class="progress-items-title"
        :class="progress === 1 ? 'active-progress-title' : ''"
      >
        약관동의
      </h1>
    </section>

    <section class="progress-items-dot-wrapper">
      <span class="progress-items-dot"></span>
    </section>
    <section class="progress-items-wrapper">
      <h1
        class="progress-items-title"
        :class="progress === 2 ? 'active-progress-title' : ''"
      >
        본인인증
      </h1>
    </section>

    <section class="progress-items-dot-wrapper">
      <span class="progress-items-dot"></span>
    </section>
    <section class="progress-items-wrapper">
      <h1
        class="progress-items-title"
        :class="progress === 3 ? 'active-progress-title' : ''"
      >
        가입완료
      </h1>
    </section>
  </article>
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
  align-items: flex-end;
}

.progress-items-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-items-title {
  color: #bdbdbd;
  font-weight: 400;
  font-size: 14px;
}

.progress-items-dot-wrapper {
  margin: 8px 8px 0 8px;
}
.progress-items-dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #e2e2e2;
  border-radius: 30px;
}

.active-progress-title {
  color: #222222;
  font-weight: bold;
}
</style>
