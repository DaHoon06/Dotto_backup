<template>
  <div id="register-container">
    <div>
      <ul>
        <li class="register-btn">
          <b-button active>일반 회원</b-button>
        </li>
        <li class="register-btn">
          <button>타투이스트 회원</button>
        </li>
      </ul>
    </div>
    <member-register-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemberRegisterComponent from "@/components/MemberRegisterComponent.vue";
import TattooistRegisterComponent from "@/components/TattooistRegisterComponent.vue";

@Component({
  components: {
    MemberRegisterComponent,
    TattooistRegisterComponent
  }
})
export default class RegisterView extends Vue {
  type: string;

  constructor() {
    super();
    this.type = 'member';
  }

  // private get currentTab() {
  //   return '';
  // }

}
</script>

<style scoped>
ul {
  list-style: none;
}

ul .register-btn {
  float: left;
  padding: 10px;
}

#register-container {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>