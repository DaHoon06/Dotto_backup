import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export interface State {
  processing: boolean,

}

Vue.use(Vuex)

import userStore from "@/store/user/UserStore";

const store = new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['userStore']
  })],
  modules: {
    userStore: userStore,
  }
});
export default store;
