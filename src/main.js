import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@components'
import filters from '@assets/js/filters';


//定义过滤器
Object.keys(filters).forEach(element=>{
  Vue.filter(element, filters[element]);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
