<template>
  <article id="my-feed-view-container">
    <my-information-component />

    <section id="my-category">
      <ul>
        <li
          @click="changeType('MyFeed')"
          :class="{ currentPage: myTabsComputed === 'MyFeed' }"
        >
          마이피드
        </li>
        <li
          @click="changeType('MyLikes')"
          :class="{ currentPage: myTabsComputed === 'MyLikes' }"
        >
          좋아요
        </li>
      </ul>
    </section>

    <section id="my-tabs-area">
      <component :is="dynamicView" />
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainComponent from "@/components/MainComponent.vue";
import { FooterComponent, MenuButton } from "@/components/common";
import FollowListComponent from "@/components/main/FollowList.vue";
import MainBannerComponent from "@/components/main/MainBanner.vue";
import MyInformationComponent from "@/components/my/MyInformation.vue";
import MyFollowComponent from "@/components/my/MyFollow.vue";
import MyFeedComponent from "@/components/my/tabs/MyFeed.vue";
import MyLikeListsComponent from "@/components/my/tabs/MyLikeLists.vue";

@Component({
  components: {
    MyFollowComponent,
    MyInformationComponent,
    MainBannerComponent,
    FollowListComponent,
    FooterComponent,
    MainComponent,
    MenuButton,
  },
})
export default class MyView extends Vue {
  type = "MyFeed";

  private changeType(type: string) {
    this.myTabsComputed = type;
  }

  private set myTabsComputed(type: string) {
    this.type = type;
  }

  private get myTabsComputed() {
    return this.type;
  }

  private get dynamicView() {
    switch (this.myTabsComputed) {
      case "MyFeed":
        return MyFeedComponent;
      case "MyLikes":
        return MyLikeListsComponent;
    }
  }
}
</script>

<style scoped>
#my-feed-view-container {
  width: 100vw;
  height: 100%;
}
#my-information-wrapper {
  margin: 10em auto 4em auto;
  width: 50vw;
}

#my-category {
  display: flex;
  justify-content: center;
  margin-bottom: 1.3rem;
}
#my-category > ul {
  margin: 0;
  padding: 0;
}
#my-category > ul > li {
  float: left;
  margin-left: 1em;
  height: 20px;
}
#my-category > ul > li:hover {
  cursor: pointer;
  border-bottom: 2px solid gray;
}
#my-tabs-area {
  border-top: 1px solid #e2e2e2;
  background: #f6f6f6;
}

.currentPage {
  font-weight: 700;
  color: #d5d5d5 !important;
  padding-bottom: 10px;
  border-bottom: 1px solid #e2e2e2;
}
</style>
