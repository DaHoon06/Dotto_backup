<template>
  <article class="right-side">
    <button id="go-top" class="right-side-btn" @click="scrollHandler">
      <img id="top" src="@/assets/icons/main/go-top.svg" alt="top" />
      <span>TOP</span>
    </button>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopScrollButton extends Vue {
  timeOut = '';

  private scrollHandler() {
    window.scrollBy(0,-9999);
  }

}

</script>

<style scoped>
#go-top {
  background: #222222;
  color: #FFFFFF;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#top {
width: 10px;
}
/* side button */
#side-button-container {
  position: fixed;
  top: 50%;
  right: 48px;
}

.right-side-btn {
  width: 56px;
  height: 56px;
  border-radius: 45px;
  background: #FFFFFF;
}

.right-side {
  margin-top: 10px;
  z-index: 999;
}

</style>
