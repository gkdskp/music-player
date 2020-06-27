<template>
	<b-sidebar id="sidebar-right" title="Queue" width="1500px" no-close-on-backdrop="false"  right shadow>
		<song-list :songs="songs" />
    </b-sidebar>
</template>

<script>
import SongList from '../lists/SongList';


export default {
	components: {
		SongList
	},

	computed: {
		songs() {
			return this.$store.getters.playQueue
		}
	}
}
</script>