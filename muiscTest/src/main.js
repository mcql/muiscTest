// import Vue from 'vue'
// import App from './App'
// import store from '@/pages/store/'

// Vue.config.productionTip = false
// Vue.prototype.$store = store
// App.mpType = 'app'

// const app = new Vue(App)
// app.$mount()

import Vue from 'vue'
import App from './App'
import store from '@/store/'
 
Vue.prototype.$store = store
 
Vue.config.productionTip = false
App.mpType = 'app'
 
new Vue({
  store
}).$mount()