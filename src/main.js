import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import AlbumView from './views/AlbumView';
import AlbumsView from './views/AlbumsView';
import ArtistsView from './views/ArtistsView';
// import ArtistView from './views/ArtistView';


require('vue-ionicons/ionicons.css')

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

const router = new VueRouter({
  linkActiveClass: "current",
  mode: 'hash',
  base: __dirname,
  routes: [

    {
      path: '/artists',
      component: ArtistsView
    },
    {
      path: '/',
      component: AlbumsView
    },
    {
      path: '/album/:albumid',
      name: "album",
      component: AlbumView
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
