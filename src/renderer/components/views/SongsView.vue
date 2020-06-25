<template>
	<div class="scontainer">
		<h1>Songs</h1>
		<song-list
			:isAlbumView="false"
			:songs="songs"
		/>
	</div>
</template>

<script>
import { ipcRenderer } from 'electron';
import SongList from '../lists/SongList';

export default {
	name: 'SongsView',

	components: {
		'song-list': SongList
	},

	computed: {
		songs(){ const songsList = this.$store.getters.getSongs
		songsList.sort((a, b) => (a.title > b.title)? 1: -1);
		return songsList }
	},

	created() {
		ipcRenderer.send('find-songs');
		ipcRenderer.once('songs-list', (event, args) => {
			console.log(args);
			this.songs = args
		})
	}
}
</script>