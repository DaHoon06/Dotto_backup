<template>
  <footer id="footer-container">
    <section id="footer-top">
      <div class="footer-items">
        <ul>
          <li><h5>고객센터</h5></li>
          <li>운영시간 AM 10:00 - PM 06:00</li>
          <li>점심시간 PM 12:00 - PM 01:00</li>
          <li>주말,공휴일 휴무 입니다.</li>
        </ul>
      </div>
      <div class="footer-items">
        <ul>
          <li><h5>마이피드</h5></li>
          <li>로그인</li>
          <li>예약내역조회</li>
          <li>피드로 이동</li>
        </ul>
      </div>
      <div class="footer-items">
        <ul>
          <li><h5>서비스</h5></li>
          <li>FAQ</li>
          <li>공지사항</li>
          <li></li>
        </ul>
      </div>
      <div class="footer-items">
        <ul>
          <li><h5>파트너쉽</h5></li>
          <li>파트너쉽 타투이스트 투자 모집</li>
        </ul>
      </div>
      <div class="footer-items">
        <ul>
          <li>
            <div id="footer-top-icons">
              <img class="footer-icons" src="@/assets/icons/instagram.png" alt="instagram" />
            </div>
          </li>
          <li>개인정보처리방침</li>
          <li>이용약관</li>
          <li>사업자정보확인</li>
        </ul>
      </div>
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
}

#footer-top {
  display: flex;
  justify-content: space-around;
  height: 16em;
  flex-direction: row;
  align-items: center;
  color: #9E9E9E;
  font-size: 0.9em;
}

.footer-items {
  height: 10em;
}

#footer-top-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
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
  width: 25px;
}


</style>