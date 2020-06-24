<template>
	<div id="control-container" v-if="isPlayerActive">
		<player-control />
	</div>
</template>

<script>
import PlayerControl from '../PlayerControl';


export default {
	name: 'PlayBarContainer',

	components: {
		'player-control': PlayerControl
	},

	computed: {
		isPlayerActive() {
			return this.$store.getters.currSong == null
		}
	}

}
</script>

<style scoped>
#control-container {
  width: 100%;
  height: 10%;
  top: 92vh;
  bottom: 0;
  z-index: 29999;
  left: 0;
  position: fixed;
  background: rgb(2, 109, 133);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>