<template>
	<b-container 
		class="main-container"
		:class="{
			'bottom-magin': isPlayerActive
		}" 
		fluid
	>
		<keep-alive :include="keepAlive">
			<router-view class="router-container" />
		</keep-alive>
	</b-container>
</template>

<script>
import { BContainer } from 'bootstrap-vue';

export default {
	name: 'RouterViewContainer',

	data() {
		return {
			keepAlive: ["SongsView", "AlbumsView", "ArtistsView"]
		}
	},

	components: {
		'b-container': BContainer
	},

	computed: {
		isPlayerActive() { return this.$store.getters.currSong.file != null; }
	}
}
</script>

<style scoped>
.main-container {
	left: 8vw;
	width: 92vw;
	height: 100vh;
	position: relative;
	padding-top: 30px;
	margin: 0;
	overflow-y: scroll;
}

.main-container .router-container {
	padding: 0vh 4vh;
}

.bottom-magin {
	height: 92vh;
}
</style>