<template>
	<div class="list-container">
		<div 
			v-for="(album, index) in albums" 
			class="list-item inline-block" 
			:key="index"
		>
			<entity-item 
				:title='album.title'
				:art='album.art'
				:subtitle='album.artist.name'
				:id='album._id'
				:isAlbumView='false'
				:isCircular='false'
				route='album'
				subroute='artist'
				:subid='album.artist._id'
			/>
		</div>
	</div>
</template>

<script>
import EntityItem from '../EntityItem';

export default {
	name: 'AlbumList',

	components: {
		'entity-item': EntityItem
	},

	props: [
		'albums'
	],
}
</script>