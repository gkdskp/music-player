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
        :subid="album.artist._id"
        class="album-info"
      />
    </div>
    <div class="entity-songs-list">
      <song-list :isAlbumView="true" :songs="songs" :clickToSet="true" class="song-list-item" />
    </div>
  </div>
</template>

<script>
import EntityItem from "../EntityItem.vue";
import SongList from "../lists/SongList.vue";

export default {
  name: "AlbumView",

  components: {
    "entity-item": EntityItem,
    "song-list": SongList
  },
  
   computed: {
    album() {
      return this.$store.getters.getAlbum(this.$route.params.id);
    },

    songs() {
      return this.$store.getters.getAlbumSongs(this.$route.params.id);
    }
  },
};
</script>