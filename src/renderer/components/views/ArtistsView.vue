<template>
	<div class="scontainer">
		<h2>Artists</h2>
		<artist-list :artists="artists" />
	</div>
</template>

<script>
import ArtistList from '../lists/ArtistList';

export default {
	name: 'ArtistsView',

	components: {
		'artist-list': ArtistList
	},
	
	computed: {
		artists() {
			const artistList = this.$store.getters.getArtists;
			artistList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase()? 1: -1);
			return artistList;
		}
	}
}
</script>