<template>
	<div class="list-container">
		<div class="sticky-top">
			<h1 v-if="title" class="list-title">{{ title }}</h1>
			<div
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
				:trackNum="isAlbumView? (song.trackNum || index+1): index+1"
				:title="song.title"
				:songAlbum="song.album"
				:songArtists="song.performer"
				:file="song.file"
				:duration="song.duration"
				@click.native="setSong(song)"
			/>
		</div>
	</div>
</template>

<script>
import SongItem from './SongItem';
import { mapMutations } from 'vuex';

export default {
	name: 'SongList',

	props: [
		'isAlbumView',
		'title',
		'songs',
	],
	
	components: {
		'song-item': SongItem
	},

	methods: {
		...mapMutations(['setSong']),
	},
	
}
</script>

<style scoped>
.table {
	width: 100%;
	padding: 20px 10px 20px 10px;
}

.list-title {
	padding-top: 30px;
}

.num-cell {
	width: 6%;
}

.duration-cell {
	width: 8%;
}

.title-cell {
	width: 25%;
}

.album-view .title-cell {
	width: 86%;
}

.artists-cell,
.album-cell {
	width: 25%;
}

.song-list {
	position: relative;
	margin-bottom: 60px;
}

.sticky-top {
	width: 100%;
	padding-right: 20px;
}

</style>