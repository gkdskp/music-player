<template>
  <div id="app">
	<nav-bar />
	<albums-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import AlbumsView from './views/AlbumsView';

export default {
  name: 'App',
  components: {
	'nav-bar': NavBar,
	'albums-view': AlbumsView
  },
  data() {
    return {
      albums: [{
        "name": "Kid A",
      },
      {
        "name": "OK Computer",
      }]
    }
  }
};
</script>

<style>
@import url('./assets/theme.css');
</style>
