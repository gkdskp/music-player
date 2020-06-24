<template>
	<div class="scontainer">
		<h1>Artists</h1>
		<artist-list :artists="artists" />
	</div>
</template>

<script>
import ArtistList from '../ArtistList';

export default {
	name: 'ArtistsView',

	components: {
		'artist-list': ArtistList
	},
	
	computed: {
		artists() {
			const artistList = this.$store.getters.getArtists;
			artistList.sort((a, b) => a.name > b.name? 1: -1);
			return artistList;
		}
	}
}
</script>