<template>
  <section class="right-side">
    <button id="go-top" class="right-side-btn">
      <img id="top" src="@/assets/icons/main/go-top.png" alt="top" />
      <span>TOP</span>
    </button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopScrollButton extends Vue {}

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

.right-side-btn {
width: 56px;
height: 56px;
border-radius: 45px;
background: #FFFFFF;
}

.right-side {
margin-top: 10px;
}

</style>