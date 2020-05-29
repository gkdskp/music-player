<template>
  <div id="app">
    <nav-bar />
    <router-view />
    <player-control />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import PlayerControl from './components/PlayerControl';

export default {
  name: "App",

  components: {
    "nav-bar": NavBar,
    'player-control': PlayerControl,
  },

  updated() {
    console.log(window.location);
  }
};
</script>

<style>
@import url("./assets/theme.css");
</style>
