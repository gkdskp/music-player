<template>
	<div class="route-container">
		<div class="entity-info">
			<entity-item
				:isEntityView="true"
				:isCircular="true"
				:title="artist.name"
				:art="artist.art"
				:desc="artist.desc"
			/>
		</div>
		<div class="entity-songs-list">
			<song-list
				v-for="(album, index) in artist.albums"
				:key="index"
				:isAlbumView="true"
				:title="album.title"
				:songs="album.songs"
			/>
		</div>
	</div>
</template>

<script>
import { ipcRenderer } from 'electron';
import EntityItem from '../components/EntityItem';
import SongList from '../components/SongList';

export default {
	name: 'ArtistView',

	components: {
		'entity-item': EntityItem,
		'song-list': SongList
	},
	
	data() {
		return {
			artist: {}
		}
	},

	created() {
		ipcRenderer.send('find-artist', {_id: this.$route.params.id});
		ipcRenderer.on('artist-info', (event, args) => {
			this.artist = args;
		})
	}
}
</script>