<template>
  <article class="right-side" v-show="scrollControl && !this.isModal">
    <button id="go-top" class="right-side-btn" @click="scrollHandler">
      <img id="top" src="@/assets/icons/main/go-top.svg" alt="top" />
      <span>TOP</span>
    </button>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EventBus from "@/utils/eventBus";

@Component
export default class TopScrollButton extends Vue {
  isScrollButton = true;

  created() {
    this.eventListener();
  }
  eventListener(): void {
    EventBus.$on("topScrollButtonControl", (payload: boolean) => {
      this.scrollControl = payload;
    });
  }

  get scrollControl() {
    return this.isScrollButton;
  }
  set scrollControl(type: boolean) {
    this.isScrollButton = type;
  }

  private scrollHandler(): void {
    window.scrollBy(0, -9999);
  }
}
</script>

<style scoped>
#go-top {
  background: #222222;
  color: #ffffff;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#top {
  width: 10px;
}

.right-side-btn {
  width: 56px;
  height: 56px;
  border-radius: 45px;
  background: #ffffff;
}

.right-side {
  position: fixed;
  top: 50%;
  right: 5px;
  z-index: 10;
}

@media screen and (max-width: 1023px) {
  .right-side-btn {
    width: 42px;
    height: 42px;
  }
}
/* 모바일 대응 */
@media screen and (max-width: 767px) {
  .right-side-btn {
    width: 36px;
    height: 36px;
  }
}
</style>
