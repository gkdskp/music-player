import Vue from 'vue'
import App from './App.vue'

require('vue-ionicons/ionicons.css')

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  render: h => h(App),
}).$mount('#app')
