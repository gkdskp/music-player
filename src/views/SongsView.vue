<template>
	<div class="route-container">
		<h1>Songs</h1>
		<song-list
			:isAlbumView="false"
			:songs="songs"
		/>
	</div>
</template>

<script>
import { ipcRenderer } from 'electron';
import SongList from '../components/SongList';

export default {
	name: 'SongsView',

	components: {
		'song-list': SongList
	},

	data() {
		return {
			songs: []
		}
	},

	created() {
		ipcRenderer.send('find-songs');
		ipcRenderer.on('songs-list', (event, args) => {
			console.log(args);
			this.songs = args
		})
	}
}
</script>