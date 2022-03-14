import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMoment from "vue-moment";
import { ins as axios } from "@/lib/axios";
import VueAxios from 'vue-axios';
import VueCookies from "vue-cookies";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(VueCookies);
Vue.use(VueMoment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
