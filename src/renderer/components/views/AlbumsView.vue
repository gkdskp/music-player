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
	
	computed: {
		albums() {
			return this.$store.getters.getAlbums;
		}
	},

	components: {
		'album-list': AlbumList
	},
}
</script>