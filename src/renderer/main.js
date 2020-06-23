import Vue from 'vue';
import store from './store';
import VueRouter from 'vue-router';
import { ipcRenderer } from 'electron';

import App from './App.vue';
import router from './router';

require('vue-ionicons/ionicons.css')

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]


new Vue({
  store,
  router,
  render: h => h(App),

  created() {
    ipcRenderer.send('fetch:all');
    ipcRenderer.once('res:all', (event, args) => {
      store.commit('LOAD_INITIAL', args);
    })
  }
}).$mount('#app')
