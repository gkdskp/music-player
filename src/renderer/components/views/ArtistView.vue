<template>
	<div class="scontainer">
		<div class="entity-info">
			<entity-item
				:isEntityView="true"
				:isCircular="true"
				:title="artist.name"
				:art="albums[0].art"
				:desc="artist.desc"
				:id="artist._id"
				route="artist"
			/>
		</div>
		<div class="entity-songs-list">
			<song-list
				v-for="(album, index) in albums"
				:key="index"
				:isAlbumView="true"
				:title="album.title"
				:songs="album.songs"
				:clickToSet="true"
			/>
		</div>
	</div>
</template>

<script>
import EntityItem from '../EntityItem';
import SongList from '../lists/SongList';

export default {
	name: 'ArtistView',

	components: {
		'entity-item': EntityItem,
		'song-list': SongList
	},
	

	computed: {
		artist() { 
			return this.$store.getters.getArtist(this.$route.params.id); 
		},
		albums() {
			return this.$store.getters.getArtistAlbums(this.$route.params.id);
		}
	}
}
</script>