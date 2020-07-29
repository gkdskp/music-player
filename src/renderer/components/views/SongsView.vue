<template>
	<div class="scontainer">
		<h2>Songs</h2>
		<song-list
			:isAlbumView="false"
			:songs="songs"
			:clickToSet="true"
		/>
	</div>
</template>

<script>
import SongList from '../lists/SongList';

export default {
	name: 'SongsView',

	components: {
		'song-list': SongList
	},

	data() {
		return {
		}
	},

	computed: {
		songs() { return this.$store.getters.getSongs; }
	},

	activated() {
		console.log('Ok');
	}
	
}
</script>