<template>
	<div class="route-container">
		<h1>Albums</h1>
		<album-list :albums="albums" />
	</div>
</template>

<script>
import AlbumList from '../components/AlbumList';
import { ipcRenderer } from 'electron';

export default {
	name: 'AlbumsView',

	components: {
		'album-list': AlbumList
	},
	
	data() {
		return {
			albums: []
		}
	},

	created() {
		ipcRenderer.send('find-albums');
		ipcRenderer.on('albums-list', (event, args) => {
			this.albums = args;
		})
	}
}
</script>