import Vue from 'vue'
import vueRouter from 'vue-router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(vueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
