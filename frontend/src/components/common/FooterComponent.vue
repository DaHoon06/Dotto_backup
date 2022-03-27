<template>
  <div id="footer-container">
    <div id="footer-top">
      <section>
        <h5>고객센터</h5>
        <ul>
          <li>운영시간 AM 10:00 ~ PM 06:00</li>
          <li>점심시간 AM 12:00 ~ PM 01:00</li>
          <li>주말,공휴일 휴무 입니다.</li>
        </ul>
      </section>

      <section id="footer-center">
        <div>
          <ul>
            <li>브랜드</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>마이페이지</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>쇼핑</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>서비스</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <ul>
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>사업자정보확인</li>
          </ul>
        </div>
      </section>



    </div>
    <hr/>
    <div id="footer-bottom">
      <section>
        닷투
      </section>
    </div>
  </div>
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
  max-width: 1920px;
  font-size: 12px;
}

#footer-top {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 272px;
}


#footer-center {
  display: flex;
  align-items: center;

}

#footer-bottom {
  height: 54px;
  text-align: center;
  color: #9E9E9E;
  font-size: 8px;
}
</style>