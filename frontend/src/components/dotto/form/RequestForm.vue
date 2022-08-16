<template>
  <article class="request-form-container">
    <h1>의뢰서</h1>
    <section>
      <label>타투이스트</label>
      닉네임
    </section>
    <section>
      <label>의뢰일자</label>
      날짜선택 시간선택
    </section>

    <hr />

    <section>
      <label>타투부위</label>
      <input type="text" placeholder="타투부위" />
    </section>
    <section>
      <select>
        <option disabled value="">타투 사이즈를 선택해 주세요.</option>
        <option></option>
      </select>
    </section>

    <hr />

    <section>
      <label>본 게시물</label>
      <input type="checkbox" /> 이뢰에 참고 적용하기기
    </section>

    <hr />

    <section>
      <label>커버업 여부</label>
      <input type="radio" name="dotto-type" /> 새로운 타투
      <input type="radio" name="dotto-type" /> 커버업 타투
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IBoard } from "@/interfaces/IBoard";

@Component
export default class RequestForm extends Vue {
  part: IBoard.SelectOptions[] = [
    { text: "올드스쿨", value: "1" },
    { text: "뉴스쿨", value: "2" },
    { text: "재패니즈", value: "3" },
    { text: "블랙엔그레이", value: "4" },
    { text: "다크사이드", value: "5" },
    { text: "트래쉬폴카", value: "6" },
    { text: "치카노", value: "7" },
    { text: "블랙워크", value: "8" },
    { text: "라인워크", value: "9" },
    { text: "폴리네시안", value: "10" },
    { text: "컬러", value: "11" },
    { text: "커스텀", value: "12" },
  ];
}
</script>

<style scoped>
.request-form-container {
  display: flex;
  flex-direction: column;
}
</style>
