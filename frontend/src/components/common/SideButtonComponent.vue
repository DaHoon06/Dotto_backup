<template>
  <aside id="side-button-container">
    <section class="right-side">
      <button class="right-side-btn">
        <img id="chat-icon" src="@/assets/icons/main/chat_icon.png" alt="chat" />
      </button>
    </section>
    <section class="right-side">
      <button id="go-top" class="right-side-btn">
        <img id="top" src="@/assets/icons/main/go-top.png" alt="top" />
        <span>TOP</span>
      </button>
    </section>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SideButtonComponent extends Vue {}

</script>

<style scoped>
#side-button-container {
  position: fixed;
  width: 296px;
  min-height: 992px;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#go-top {
  background: #222222;
  color: #FFFFFF;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#chat-icon {
  width: 25px;
}
#top {
  width: 10px;
}
.right-side-btn {
  width: 56px;
  height: 56px;
  border: 1px solid #b9b9b9;
  border-radius: 45px;
  background: #FFFFFF;
}
.right-side {
  margin-top: 10px;
}

</style>