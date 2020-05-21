<template>
	<div class="route-container">
		<h1>Albums</h1>
		<album-list :albums="albums" />
	</div>
</template>

<script>
import AlbumList from '../components/AlbumList';

export default {
	name: 'AlbumsView',
	components: {
		'album-list': AlbumList
	},
	data() {
		return {
			albums: []
		}
	}
}
</script>