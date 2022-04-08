import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import InfiniteLoading from 'vue-infinite-loading'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(InfiniteLoading)
Vue.use(VueSpinners)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
