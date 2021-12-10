import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// amfe-flexible rem适配方案
import 'amfe-flexible'
//全局引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
