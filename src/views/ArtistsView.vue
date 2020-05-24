<template>
	<div class="route-container">
		<h1>Artists</h1>
		<artist-list :artists="artists" />
	</div>
</template>

<script>
import ArtistList from '../components/ArtistList';
import { ipcRenderer } from 'electron';

export default {
	name: 'ArtistsView',

	components: {
		'artist-list': ArtistList
	},
	
	data() {
		return {
			artists: []
		};
	},

	created() {
		console.log("LOL")
		ipcRenderer.send('find-artists');
		ipcRenderer.on('artists-list', (event, args) => {
			console.log("Yaay")
			this.artists = args;
		})
	}
}
</script>