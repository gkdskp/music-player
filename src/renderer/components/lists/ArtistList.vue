<template>
	<div class="list-container">
		<div 
			class="list-item inline-block" 
			v-for="(artist, index) in artists"
			:key="index"
		>
			<entity-item
				:isEntityView='false'
				:isCircular='true'
				:title='artist.name'
				:art='artist.art'
				:id='artist._id'
				route='artist'
			/>
		</div>
	</div>
</template>

<script>
import EntityItem from '../EntityItem';

export default {
	name: 'ArtistList',

	props: [
		'artists'
	],
	
	components: {
		'entity-item': EntityItem
	}
}
</script>
