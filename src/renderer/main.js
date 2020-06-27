import Vue from 'vue';
import store from './store';
import VueRouter from 'vue-router';
import { ipcRenderer } from 'electron';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue';
import router from './router';

require('vue-ionicons/ionicons.css')

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]


new Vue({
  store,
  router,
  render: h => h(App),

  created() {
    ipcRenderer.send('albums:all');
    ipcRenderer.once('albums:list', (event, args) => {
      store.commit('LOAD_INITIAL', args);
    })
  }
}).$mount('#app')
