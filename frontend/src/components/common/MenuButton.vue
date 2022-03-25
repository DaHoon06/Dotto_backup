<template>
  <div id="menuButton" v-if="showMenuList">
    <p><button class="float-end" @click="closeMenu">X</button></p>
    <ul>
      <li>
        로그인 / 회원가입 마이페이지
      </li>
      <li>
        타투이스트 보러가기 ( 일반회원일 경우 보이기 )
      </li>
      <li>
        타투 도안 적용해보기 ( 일반회원일 경우 보이기 )
      </li>
      <li>
        채팅목록 이동
      </li>
      <li>
        타투 등록 ( 타투이스트일 경우 보이기 )
      </li>
      <li>
        타투 도안 올리기 ( 타투이스트일 경우 보이기 )
      </li>
      <li>
        예약목록 이동 ( 일반회원일 경우 보이기 )
      </li>
      <li>
        예약현황 확인 ( 타투이스트일 경우 보이기 )
      </li>
      <li>
        타투 게시판으로 이동
      </li>
      <li>
        타투 견적서 작성하기 ( 일반회원일 경우 보이기 )
      </li>
      <li>
        닷투를 찾는 사람들 페이지 이동
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class MenuButton extends Vue {
  @Prop() showMenuList?: boolean;

  closeMenu() {
    this.showMenuList = false;
    this.$emit('showMenu', this.showMenuList)
  }
}
</script>

<style scoped>
#menuButton {
  position: absolute;
  top: 0px;
  background: #FFFFFF;
  height: 100%;
  width: 300px;
  min-height: 992px;
  border: 1px solid gray;
}
#menuButton ul {
  background: #FFFFFF;
}

ul li {
  border: 1px solid gray;
  margin-top: 20px;
  margin-right: 30px;
  font-size: 12px;
}
</style>