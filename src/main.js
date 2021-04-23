import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom.css';
import jQuery from 'jquery'
global.$ = jQuery
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

// import datePicker from 'vue-bootstrap-datetimepicker';
// import 'bootstrap/dist/css/bootstrap.css';
// Vue.use(datePicker);


Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)

// Install BootstrapVue icon
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')