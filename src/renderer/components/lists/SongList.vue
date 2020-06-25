<template>
  <div class="list-container" :class="{ 'album-view': isAlbumView }">
    <!-- <div class="sticky-top">
			<h1 v-if="title" class="list-title">{{ title }}</h1> -->
    <!-- <div
				class="table seperated subtitle-text"
				:class="{'album-view': isAlbumView}"
			>
				<div class="row">
					<div class="num-cell cell">#</div>
					<div class="title-cell cell">TITLE</div>
					<div 
						class="album-cell cell subtitle-text"
						v-if="!isAlbumView"
					>ALBUM</div>
					<div 
						class="artists-cell cell subtitle-text"
						v-if="!isAlbumView"
					>ARTISTS</div>
					<div class="duration-cell cell">DURATION</div>
				</div>
			</div>
		</div>
		<div class="songs-list">
			<song-item
				v-for="(song, index) in songs"
				:key="index"
				:isAlbumView="isAlbumView"
				:trackNum="isAlbumView? (`${song.track.no}` || index+1): index+1"
				:title="song.title"
				:songAlbum="song.album"
				:songArtists="song.performer"
				:file="song.file.name"
				:duration="song.duration"
				@click.native="setSong(song)"
			/>
		</div> -->
    <b-table :items="songs" :fields="fields" sort-icon-left striped hover>
      <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template v-slot:cell(duration)="data">
        {{ data.item.duration }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "SongList",

  props: ["isAlbumView", "title", "songs"],

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

  components: {
    // 'song-item': SongItem
  },
};
</script>

<style>
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
</style>
