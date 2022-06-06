<template>
  <div id="dotto-post-wrapper">
    <div id="dotto-post-btn-area">
      <button id="dotto-post-btn">등록하기</button>
    </div>
    <div id="dotto-post-body">

      <div id="dotto-post-title" class="dotto-post-side-div">
        <h4>닷투 게시글 작성</h4>
      </div>

      <div class="dotto-post-side-div">
        <input class="dotto-post-input" type="text" placeholder="ex) 블랙워크 꽃과 나비" />
      </div>

      <div class="dotto-post-side-div">
        <select>
          <option disabled selected>장르</option>
        </select>
        <select>
          <option disabled selected>소요시간</option>
        </select>
      </div>

      <div class="event-price-wrapper dotto-post-side-div">
        <div>
          <input class="dotto-post-input won" type="number" placeholder="가격" />
        </div>
        <div id="event-price-radio-area">
          <input type="checkbox" id="event-price" />
          <label for="event-price">할인이벤트</label>
        </div>
      </div>

      <div class="event-price-wrapper dotto-post-side-div">
        <div>
          <label>정상가격</label>
          <input class="dotto-post-input won" type="number" placeholder="0" />
        </div>
        <div>
          <label>할인가격</label>
          <input class="dotto-post-input won" type="number" placeholder="0" />
        </div>
      </div>

      <div id="textarea-wrapper" class="dotto-post-side-div">
        <div>
          <div></div>
          <input id="dotto-post-tags" type="text" placeholder="여기 해쉬태그 등록" />
        </div>
        <div>
          <textarea >텍스트 입력~~</textarea>
        </div>
      </div>

      <div class="dotto-post-side-div">
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
textarea {
  width: 95%;
  padding: 1rem;
  height: 400px;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
  margin-left: 1.5rem;
}
#dotto-post-title {
  margin: 3em 0;
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
  border-bottom: 1px solid #BDBDBD;
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
  width: 90%;
  max-width: 1200px;
  height: 100%;
  min-height: 600px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: white;
}

.dotto-post-side-div {
  width: 100%;
  margin-left: 3.5rem;
}

#event-price-radio-area {
  display: flex;
  align-items: center;
}
#textarea-wrapper {
  border: 1px solid #BDBDBD;
  width: 90%;
  margin-top: 3rem;
}
#dotto-post-tags {
  width: 95%;
  border: none;
  margin-left: 1.5rem;
  border-bottom: 1px solid #BDBDBD;
  outline: none;
  padding: 1rem;
  font-size: 13px;
}

.event-price-wrapper {
  display: flex;
}

.dotto-post-input {
  border: 1px solid #E2E2E2;
  border-radius: 3px;
  height: 40px;
  color: #BDBDBD;
  outline: none;
  width: 90%;
  padding: 3px;
}
.won {
  width: 100%;
}
.won::after {
  content: '원';
  margin-left: 5px;
}
</style>