<template>
  <div class="list-container" :class="{ 'album-view': isAlbumView }">
    <b-table
      :items="songsList"
      :caption-html="titleFormatted"
      caption-top
      striped
      :fields="fields"
      :tbody-tr-class="current"
      sort-icon-left
      hover
      @row-clicked="setSong"
    >
      <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <template v-slot:cell(title)="data">
        <Texst :text="data.item.title"></Texst>
      </template>

      <template v-slot:cell(album)="data">
        <Texst :text="getAlbumName(data.item.album)"></Texst>
      </template>
    </b-table>
  </div>
</template>

<script>
import Texst from "../Text";

export default {
  name: "SongList",

  props: ["isAlbumView", "title", "songs", "clickToSet"],

  data() {
    return {
      fields: [
        { key: "index", label: "#", tdClass: "num-cell", thClass: "num-cell" },
        {
          key: "title",
          sortable: true,
          tdClass: "title-cell",
          thClass: "title-cell",
        },
        {
          key: "album",
          label: "Album",
          sortable: true,
          stickyColumn: true,
          tdClass: "album-cell",
          thClass: "album-cell",
        },
        {
          key: "performer",
          label: "Artists",
          sortable: true,
          tdClass: "artist-cell",
          thClass: "artist-cell",
        },
        {
          key: "durationFormatted",
          label: "Duration",
          sortable: true,
          tdClass: "duration-cell",
          thClass: "duration-cell",
        },
      ],
    };
  },

  computed: {
    titleFormatted() {
      return this.title ? `<h4>${this.title}</h4>` : "";
    },
    songsList() {
      return this.songs;
    },
  },

  components: {
    // 'song-item': SongItem
    Texst,
  },

  methods: {
    getAlbumName(id) {
      return this.$store.getters.getAlbumName(id);
    },

    setSong(data) {
      console.log(this.clickToSet)
      if (!this.clickToSet) this.$store.commit("setCurrent", data);
      else this.$store.commit("setSong", data);
    },

    current(song) {
      if (song === this.$store.getters.currSong) return "current";
    },
  },
};
</script>

<style>
table {
  cursor: pointer;
}

.num-cell {
  width: 7% !important;
}

.duration-cell {
  width: 8% !important;
}

.title-cell {
  width: 35% !important;
}

.album-cell,
.artist-cell {
  width: 25%;
}

.album-view .album-cell {
  display: none;
}

.current * {
  color: #00b4db !important;
}
</style>
