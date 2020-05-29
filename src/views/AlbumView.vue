<template>
  <div class="route-container">
    <div class="entity-info">
      <entity-item
        :isEntityView="true"
        :title="album.title"
        :subtitle="album.artist"
        :subsubtitle="album.year"
        :art="album.art"
        :desc="album.desc"
        subroute="artist"
        :subid="album.artistid"
        class="album-info"
      />
    </div>
    <div class="entity-songs-list">
      <song-list :isAlbumView="true" :songs="album.songs" class="song-list-item" />
    </div>
  </div>
</template>

<script>
import {ipcRenderer} from 'electron';

import EntityItem from "../components/EntityItem.vue";
import SongList from "../components/SongList.vue";

export default {
  name: "AlbumView",

  components: {
    "entity-item": EntityItem,
    "song-list": SongList
  },
  
  data() {
    return {
      album: {}
    };
  },

  created() {
    ipcRenderer.send('find-album',  this.$route.params.id);
    ipcRenderer.once('album-info', (event, args) => {
      console.log(args);
      this.album = args;
    })
  }
};
</script>