<template>
  <article id="my-information-container">
    <div id="my-info-area-1">
      <div id="my-information-profile-img"></div>
    </div>

    <div id='my-info-area-2'>
      <div id="my-information-write">
        <span>User_name</span>
        <span>게시글 작성</span>
      </div>
      <div>
        <span>팔로우</span><span>34.5천</span>
      </div>
      <div>
        소개글~~~~~~~~~~~~~~~~~~~~
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyInformationComponent extends Vue {

}
</script>

<style scoped>
#my-information-container {

}

#my-information-profile-img {
  display: inline-block;
  border: 1px solid gray;
  border-radius: 50%;
  width: 110px;
  height: 110px;
}

#my-information-write {
  display: flex;
  justify-content: space-between;
}
#my-info-area-1 {
  display: inline-block;
  width: 7em;
}
#my-info-area-2 {
  position: absolute;
  display: inline-block;
  width: 50vw;
  margin-left: 2em;
}
</style>