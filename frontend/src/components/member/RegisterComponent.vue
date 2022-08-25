<template>
  <article>
    <section class="register-tab-container">
      <label>이용목적</label>
      <section
        type="button"
        class="user-type-button"
        @click="changeComponent('member')"
      >
        <figure class="tab-button">
          <img
            v-if="registType === 'member'"
            src="@/assets/icons/register/member-active.svg"
            alt="일반회원"
          />
          <img v-else src="@/assets/icons/register/member.svg" alt="일반회원" />
          <figcaption>일반회원</figcaption>
        </figure>
      </section>

      <section
        type="button"
        class="user-type-button"
        @click="changeComponent('tattooist')"
      >
        <figure class="tab-button">
          <img
            v-if="registType === 'tattooist'"
            src="@/assets/icons/register/tattooist-active.svg"
            alt="타투이스트"
          />
          <img
            v-else
            src="@/assets/icons/register/tattooist.svg"
            alt="타투이스트"
          />
          <figcaption>타투이스트</figcaption>
        </figure>
      </section>
    </section>
    <component :is="dynamicComponent" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MemberForm from "@/components/member/MemberForm.vue";
import TattooistForm from "@/components/member/TattooistForm.vue";

@Component({
  components: {
    MemberForm,
    TattooistForm,
  },
})
export default class RegisterComponent extends Vue {
  type = "member";

  changeComponent(type: string): void {
    this.registType = type;
  }

  private get dynamicComponent() {
    switch (this.registType) {
      case "member":
        return MemberForm;
      case "tattooist":
        return TattooistForm;
    }
  }

  private get registType() {
    return this.type;
  }
  private set registType(type: string) {
    this.type = type;
  }
}
</script>

<style scoped>
.register-tab-container {
  display: flex;
}
.user-type-button {
  width: 164px;
  height: 152px;
  border-radius: 8px;
  border: 2px solid #bdbdbd;
}

.tab-button {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tab-button img {
  width: 45%;
}
</style>
