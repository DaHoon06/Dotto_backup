import { ins as axios } from "@/lib/axios";

class CommonClass {
  scrollHidden(type: boolean): void {
    if (type) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }

  // 팔로잉, 팔로우 카운트
  async getFollowCount(id: string) {
    try {
      const { data } = await axios.get(`/follower/${id}`);
      console.log(data, "팔로우 카운트");
    } catch (e) {
      console.log(e);
    }
  }

  async getFollowingCount(id: string) {
    try {
      const { data } = await axios.get(`/following/${id}`);
      console.log(data, "팔로잉 카운트");
    } catch (e) {
      console.log(e);
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $common: CommonClass;
  }
}

export default {
  install(Vue: any) {
    Vue.prototype.$common = new CommonClass();
  },
};
