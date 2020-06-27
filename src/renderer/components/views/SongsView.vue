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

	computed: {
		songs(){ console.log('Accessing'); const songsList = this.$store.getters.getSongs
		return songsList }
	},

	
}
</script>