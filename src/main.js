import Vue from 'vue'
import App from './App.vue'
import router from '@/packages/vue-router'
import '@/assets/scss/style.scss'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (!to.meta.displayPageTitle) {
    to.matched.some(record => {
      if (record.meta.displayPageTitle) {
        to.meta.displayPageTitle = record.meta.displayPageTitle
        next()
      }
    })
  }
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
