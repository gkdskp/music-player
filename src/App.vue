<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    "nav-bar": NavBar,
  },

  updated() {
    console.log(window.location);
  }
};
</script>

<style>
@import url("./assets/theme.css");
</style>
