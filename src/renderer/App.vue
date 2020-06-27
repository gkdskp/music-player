<template>
  <div id="app">
    <nav-bar />
    <router-view-container />
    <playbar-container />
    <play-queue />
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar";
import RouterViewContainer from './components/layout/RouteViewContainer';
import PlaybarContainer from './components/layout/PlaybarContainer';
import PlayQueue from './components/layout/PlayQueue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "App",

  components: {
    "nav-bar": NavBar,
    'router-view-container': RouterViewContainer,
    'playbar-container': PlaybarContainer,
    PlayQueue
  },
};
</script>

<style>
@import url("./assets/theme.css");
</style>
