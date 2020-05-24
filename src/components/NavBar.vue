<template>
  <div id="navbar" class="secondary-bg">
    <div class="navbar-container">
      <ul class="item-hoverable">
        <li>
          <router-link to="/" class="item">Albums</router-link>
        </li>
        <li>
          <a href="#" class="item">Songs</a>
        </li>
        <li>
          <router-link to="/artists" class="item">Artists</router-link>
        </li>
      </ul>
    </div>
    <div class="search-container">
      <input placeholder="Search" />
    </div>
    <div class="playlists-container">
      <h3 class="playlists-text subtitle-text">
        PLAYLISTS
        <ion-icon name="add" class="add-new" />
      </h3>
      <div class="list subtitle-text">
        <p class="hover-lighten" v-for="playlist in playlists" :key="playlist">{{ playlist }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  
  data() {
    return {
      playlists: [
        "Favourites",
        "Recently Added",
        "Recently Played",
        "Rock",
        "Synth Pop"
      ]
    };
  }
};
</script>

<style scoped>
.navbar-container {
  margin-top: 60px;
  width: 100%;
}

.navbar-container ul {
  list-style: none;
  width: 100%;
  padding: 0;
}

.navbar-container li {
  margin-bottom: 5px;
}

.navbar-container li .item {
  width: 100%;
  display: block;
  padding: 15px 0px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  font-family: "Gilroy ExtraBold";
}

.search-container {
  text-align: center;
  width: 100%;
  margin-top: 75px;
}

.search-container input {
  width: 85%;
  height: 35px;
  padding: 2px 5px;
}

.playlists-container {
  margin: 75px 15px 0px 15px;
}

.playlists-container .list {
  margin-top: 15px;
}

.playlists-text .add-new {
  float: right;
  font-size: 1.3em;
}

.playlists-text .add-new:hover {
  color: #ffffff;
}
</style>