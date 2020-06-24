<template>
	<b-container 
		class="main-container"
		:class="{
			'bottom-margin': isPlayerActive
		}" 
		fluid
	>
		<router-view />
	</b-container>
</template>

<script>
import { BContainer } from 'bootstrap-vue';

export default {
	name: 'RouterViewContainer',

	components: {
		'b-container': BContainer
	},

	computed: {
		isPlayerActive() { return this.$store.getters.currSong == null; }
	}
}
</script>

<style scoped>
.main-container {
	left: 10vw;
	width: 90vw;
	height: 100vh;
	position: relative;
	margin: 0;
	overflow: scroll;
}

.bottom-margin {
	height: 92vh;
}
</style>