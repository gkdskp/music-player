<template>
	<div
		class="song-item secondary-hoverable table seperated"
		:class="{'album-view': isAlbumView, 'curr-song': file == currSong.file}"
	>
		<div class="song-info row">
			<span class="song-track-num cell">{{ trackNum }}</span>
			<span class="song-title cell">{{ title }}</span>
			<span
				class="song-album subtitle-text cell"
				v-if="!isAlbumView"
			>
				{{ songAlbum }}
			</span>
			<span
				class="song-artists subtitle-text cell"
				v-if="!isAlbumView"
			>
				{{ songArtists }}
			</span>
			<span class="song-duration cell">{{ songDuration }}</span>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {timeParse} from '../utils/timeparse';

export default {
	name: 'SongItem',
	
	props: [
		'isAlbumView',
		'trackNum',
		'title',
		'songAlbum',
		'songArtists',
		'duration',
		'file'
	],

	mounted() {
		//console.log(this.props);
	},

	computed: {
		...mapGetters(['currSong']),
		songDuration() { return timeParse(this.duration * 10); },
	},

	updated() {
		console.log(this.currSong);
	}
}
</script>

<style scoped>
.song-item {
	width: 100%;
	padding: 20px 10px 20px 10px;
	cursor: pointer;
}

.song-title {
	width: 25%;
}

.song-artists,
.song-album {
	width: 25%;
}


.song-duration {
	width: 8%;
}

.song-track-num {
	width: 6%;
}

.song-item.album-view .song-title {
	width: 86%;
}

.curr-song *{
	color: #00B4DB;
}
</style>