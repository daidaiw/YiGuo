import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./modules/rem.js"
import "@/stylesheets/main.scss"
import "swiper/dist/css/swiper.min.css"
import axios from "axios"

Vue.prototype.$http = axios; 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
