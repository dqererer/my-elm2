import Vue from 'vue'
import router from './components/router'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

// Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(VueAxios, axios);

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})//.$mount('#app')
