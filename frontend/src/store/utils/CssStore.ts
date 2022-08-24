import { Module } from "vuex";
import { State } from "@/store";
import { CssControl } from "@/interfaces/common/IOptions";

const cssStore: Module<CssControl, State> = {
  namespaced: true,
  state: {
    BLUR: false,
    TOPHIDE: false,
  },
  mutations: {
    backgroundBlur(state, payload) {
      state.BLUR = payload;
    },
    topMenuHide(state, payload) {
      state.TOPHIDE = payload;
    },
  },
  actions: {},
  getters: {
    BLUR: (state) => state.BLUR,
    TOPHIDE: (state) => state.TOPHIDE,
  },
};
export default cssStore;
