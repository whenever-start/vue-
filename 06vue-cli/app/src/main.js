// styles
import '@/stylesheets/normalize.css'
import '@/stylesheets/init.css'
import '@/stylesheets/animate.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Pages from '@/pages'
Vue.use(Pages)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
