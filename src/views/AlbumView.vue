<template>
  <div class="route-container">
    <div class="entity-info">
      <entity-item
        :isEntityView="true"
        :title="album.title"
        :subtitle="album.artist"
        :subsubtitle="album.year"
        :desc="album.desc"
        class="album-info"
      />
    </div>
    <div class="entity-songs-list">
      <song-list :isAlbumView="true" :songs="songs" title="Songs" class="song-list-item" />
    </div>
  </div>
</template>

<script>
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
    };
  }
};
</script>