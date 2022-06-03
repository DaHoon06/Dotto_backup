<template>
  <div id="dotto-post-wrapper">
    <div id="dotto-post-btn-area">
      <button id="dotto-post-btn">등록하기</button>
    </div>
    <div id="dotto-post-body">

      <div>
        <h4>닷투 게시글 작성</h4>
      </div>

      <div>
        <input class="dotto-post-input" type="text" placeholder="ex) 블랙워크 꽃과 나비" />
      </div>

      <div>
        <select>
          <option disabled selected>장르</option>
        </select>
        <select>
          <option disabled selected>소요시간</option>
        </select>
      </div>

      <hr />

      <div class="event-price-wrapper">
        <input class="dotto-post-input won" type="number" placeholder="가격" />
        <div id="event-price-radio-area">
          <input class="dotto-post-input" type="checkbox" id="event-price" />
          <label for="event-price">할인이벤트</label>
        </div>
      </div>

      <div class="event-price-wrapper">
        <input class="dotto-post-input won" type="number" placeholder="정상가격" />
        <input class="dotto-post-input won" type="number" placeholder="할인가격" />
      </div>

      <hr />

      <div>
        <div>
          <div>이쪽에 태그 등록되도록</div>
          <input class="dotto-post-input" type="text" placeholder="여기 해쉬태그 등록" />
        </div>
        <div>
          <textarea >텍스트 입력~~</textarea>
        </div>
      </div>

      <div>
        <div>여기 이미지 미리보기</div>
        <input type="file" />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DottoPostingComponent extends Vue {

}
</script>

<style scoped>
hr {
  width: 100%;
}

textarea {
  width: 100%;
  height: 6.25em;
  border: 1px solid #F5F5F5;
  outline: none;
  resize: none;
  font-size: 14px;
}

#dotto-post-wrapper {
  height: 100%;
}

#dotto-post-btn-area {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #F5F5F5;
  background: white;
}

#dotto-post-btn {
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 10rem;
  width: 130px;
  height: 40px;
  background: #F5F5F5;
  color: #BDBDBD;
  font-size: 14px;
}

/* 게시글 작성 부분 */
#dotto-post-body {
  margin: auto;
  width: 70%;
  max-width: 1200px;
  height: 100%;
  min-height: 600px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: white;
}
#dotto-post-body > div {
  width: 100%;
}

#event-price-radio-area {
  display: flex;
  align-items: center;
}
.event-price-wrapper {
  display: flex;
  justify-content: space-around;
}

.dotto-post-input {
  border: 1px solid #BDBDBD;
  color: #E2E2E2;
  outline: none;
  width: 80%;
}

.won::after {
  content: '원';
  margin-left: 5px;
}
</style>