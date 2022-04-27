<template>
  <footer id="footer-container">
    <section id="footer-top">

      <article id="footer-top-items">
        <div id="footer-top-icons">
          <img class="footer-icons" src="@/assets/icons/instagram.png" alt="instagram" />
        </div>
        <div class="footer-top-information">
          <span>INFO</span>
          <span>ABOUT</span>
          <span>TEAM</span>
          <span>COMMUNITY</span>
        </div>
      </article>

      <article>
        <div class="footer-top-information">
          <span>email : dotto.02@gmail.com</span>
          <span> ph : 010 - 1234 -1234</span>
        </div>
      </article>
    </section>

    <hr/>

    <section id="footer-bottom">
      <span class="footer-bottom-dottoo">2022 Dotto, All rights reserved.</span>
    </section>

    </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FooterComponent extends Vue {

}
</script>

<style scoped>
#footer-container {
  background: #222222;
  color: #FFFFFF;
  width: 100%;
  font-size: 12px;
  z-index: 10;
}

#footer-top {
  display: flex;
  justify-content: flex-end;
  height: 15em;
  flex-direction: column;
  align-items: center;
}

#footer-top-items {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#footer-top-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer-top-information {
  margin-top: 2.45em;
  color: #9E9E9E;
}

.footer-top-information > span {
  margin-left: 0.5em;
}

.footer-top-information > span:not(:last-child)::after {
  content: '|';
  margin-left: 0.5em;
  color: #9E9E9E;
}

#footer-bottom {
  height: 5em;
  text-align: center;
  color: #9E9E9E;
  font-size: 8px;
}

.footer-bottom-dottoo {
  font-size: 8px;
  color: #9E9E9E;
}
.footer-bottom-dottoo::before {
  content: '@';
}

.footer-icons {
  width: 35px;
}


</style>