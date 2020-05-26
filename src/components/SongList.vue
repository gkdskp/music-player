<template>
	<div class="list-container">
		<div class="sticky-top">
			<h1 v-if="title">{{ title }}</h1>
			<div
				class="table seperated subtitle-text"
				:class="{'album-view': isAlbumView}"
			>
				<div class="row">
					<div class="num-cell cell">#</div>
					<div class="title-cell cell">TITLE</div>
					<div 
						class="album-cell cell subtitle-text"
						v-if="!isAlbumView"
					>ALBUM</div>
					<div 
						class="artists-cell cell subtitle-text"
						v-if="!isAlbumView"
					>ARTISTS</div>
					<div class="duration-cell cell">DURATION</div>
				</div>
			</div>
		</div>
		<div class="songs-list">
			<song-item
				v-for="(song, index) in songs"
				:key="index"
				:isAlbumView="isAlbumView"
				:trackNum="isAlbumView? song.trackNum: index"
				:title="song.title"
				:songAlbum="song.album"
				:songArtists="song.performer"
				duration="01:00"
			/>
		</div>
	</div>
</template>

<script>
import SongItem from './SongItem';

export default {
	name: 'SongList',

	props: [
		'isAlbumView',
		'title',
		'songs',
	],
	
	components: {
		'song-item': SongItem
	}
}
</script>

<style scoped>
.table {
	width: 100%;
	padding: 20px 10px 20px 10px;
}


.num-cell {
	width: 6%;
}

.duration-cell {
	width: 8%;
}

.title-cell {
	width: 25%;
}

.album-view .title-cell {
	width: 86%;
}

.artists-cell,
.album-cell {
	width: 25%;
}

.song-list {
	position: relative;
	margin-bottom: 60px;
}

.sticky-top {
	width: 100%;
	padding-right: 20px;
}

.title {
	padding-top: 30px;
}
</style>