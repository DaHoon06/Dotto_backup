class CommonClass {
  scrollHidden(type: boolean): void {
    if (type) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
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
