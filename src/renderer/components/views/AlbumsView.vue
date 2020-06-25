<template>
	<div class="contaziner">
		<h2>Albums</h2>
		<album-list :albums="albums" />
	</div>
</template>

<script>
import AlbumList from '../lists/AlbumList';

export default {
	name: 'AlbumsView',

	components: {
		'album-list': AlbumList
	},
	
	computed: {
		albums() {
			console.log(this.$store.getters.getAlbums);
			return this.$store.getters.getAlbums;
		}
	},

	updated() {
		
	}
}
</script>