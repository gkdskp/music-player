<template>
	<div
		class="song-item secondary-hoverable table seperated"
		:class="{'album-view': isAlbumView}"
	>
		<div class="song-info row">
			<span class="song-track-num cell">{{ trackNum }}</span>
			<span class="song-title cell">{{ title }}</span>
			<span
				class="song-album subtitle-text cell"
				v-if="!isAlbumView"
			>
				{{ songAlbum }}
			</span>
			<span
				class="song-artists subtitle-text cell"
				v-if="!isAlbumView"
			>
				{{ songArtists }}
			</span>
			<span class="song-duration cell">{{ duration }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SongItem',
	props: [
		'isAlbumView',
		'trackNum',
		'title',
		'songAlbum',
		'songArtists',
		'duration'
	]
}
</script>

<style scoped>
.song-item {
	width: 100%;
	padding: 20px 10px 20px 10px;
	cursor: pointer;
}

.song-title {
	width: 25%;
}

.song-artists,
.song-album {
	width: 25%;
}


.song-duration {
	width: 8%;
}

.song-track-num {
	width: 6%;
}

.song-item.album-view .song-title {
	width: 86%;
}
</style>