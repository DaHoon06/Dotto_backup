<template>
  <article id="my-information-container">

    <section id="my-info-area-1">
      <div id="my-information-profile-img">{{ profile.userProfile }}</div>
    </section>

    <article id='my-info-area-2'>
      <section id="my-information-write">
        <span>{{ profile.userNickname }}</span>
        <button type="button" id="feed-posting-btn" @click="redirectFeedPosting">
<!--          <img id='posting-btn-img' src="@/assets/icons/board/dotto/plus.png" alt="피드작성" />-->
          게시글 작성
        </button>
      </section>
      <section>
        <span>팔로우</span><span>{{ profile.follower}}</span>
        <span>팔로잉</span><span>{{ profile.following}}</span>
      </section>
      <section>
        {{ profile.following }}
      </section>
    </article>

  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export interface IUser {
  userNickname: string,
  userProfile: string,
  follower: string,
  following: string,
  userDesc: string,
}
@Component
export default class MyInformationComponent extends Vue {
  //token
  accessToken = this.$store.getters['userStore/accessToken'];
  profile: IUser;

  constructor() {
    super();
    this.profile = {
      userNickname: '',
      userProfile: '',
      userDesc: '',
      follower: '',
      following: '',
    }
  }

  created() {
    this.profileInit();
  }

  private async profileInit() {
    const { data } = await this.axios.get(`/user/${this.accessToken}`);
    const { result, success } = data;
    if (success) {
      this.profile = result;
    }
  }

  private redirectFeedPosting() {
    this.$router.push('/dotto/feed/post');
  }

}
</script>

<style scoped>
#my-information-container {
  margin: 10em auto 4em auto;
  width: 50vw;
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
  width: 40vw;
  margin-left: 2em;
}

#feed-posting-btn {
  border: 1px solid #E2E2E2;
  width: 129px;
  height: 40px;
  border-radius: 30px;
  font-size: 16px;
}
/* posting btn */
#posting-btn-img {
  width: 56px;
  height: 56px;
}
</style>
