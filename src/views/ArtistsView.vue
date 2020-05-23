<template>
	<div class="route-container">
		<h1>Artists</h1>
		<artist-list :artists="artists" >
	</div>
</template>

<script>
import ArtistList from '../components/ArtistList';

export default {
	name: 'ArtistsView',

	components: {
		'artist-list': ArtistList
	},
	
	data() {
		return {
			artists: []
		};
	}
}
</script>