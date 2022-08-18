import { Module } from "vuex";
import { State } from "@/store";
import { CssControl } from "@/interfaces/common/IOptions";

const cssStore: Module<CssControl, State> = {
  namespaced: true,
  state: {
    SCROLL: false,
    BLUR: false,
    TOPHIDE: false,
  },
  mutations: {
    scrollOn(state, payload) {
      state.SCROLL = payload;
    },
    backgroundBlur(state, payload) {
      state.BLUR = payload;
    },
    topMenuHide(state, payload) {
      state.TOPHIDE = payload;
    },
  },
  actions: {},
  getters: {
    SCROLL: (state) => state.SCROLL,
    BLUR: (state) => state.BLUR,
    TOPHIDE: (state) => state.TOPHIDE,
  },
};
export default cssStore;
