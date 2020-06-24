<template>
  <div class="scontainer">
    <div class="entity-info">
      <entity-item
        :isEntityView="true"
        :title="album.title"
        :subtitle="album.artist.name"
        :subsubtitle="album.year"
        :art="album.art"
        :id="album._id"
        route="album"
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
import EntityItem from "../EntityItem.vue";
import SongList from "../SongList.vue";

export default {
  name: "AlbumView",

  components: {
    "entity-item": EntityItem,
    "song-list": SongList
  },
  
   computed: {
    album() {
      console.log(this.$router);
      return this.$store.getters.getAlbum(this.$route.params.id);
    }
  },
};
</script>