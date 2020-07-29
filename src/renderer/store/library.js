const state = {
	albums: [],
	songs: [],
	artists: []
}

const getters = {
	getAlbums(state) {
		state.albums.sort((albumA, albumB) => {
			return albumA.year - albumB.year;
		});
		return state.albums;
	},

	getSongs(state) {
		
		return state.songs;
	},

	getArtists(state) {
		return state.artists;
	},

	getAlbumName: (state) => (id) =>
		state.albums.find(album => album._id === id)?.title,

	getAlbum: (state) => (id) =>
		state.albums.find(album => album._id === id),

	getAlbumSongs: (state) => (id) => 
		state.songs.filter(song => song.album === id),

	getOneFile: (state) => (id) =>
		state.songs.find(song => song.album === id).file.name,

	getArtist: (state) => (id) =>
		state.artists.find(artist => artist._id === id),

	getArtistAlbums: (state) => (id) =>
		state.albums.filter(album => album.artist._id === id)
			.map(album => {
				album.songs = state.songs.filter(song => song.album === album._id);
				return album;
			}),

	getArtistSongs: (state) => (id) =>
		state.songs.filter(song => {
			return state.albums.find(album => album._id === song.album).artist._id === id
		})
	

};

const actions = {
};

const mutations = {
	LOAD_INITIAL(state, payload) {
		state.albums = payload.albums.map(album => {
			return album;
		});
		state.artists = payload.artists;
		state.songs = payload.songs;
	},

	ADD_IMAGE(state, payload) {
		state.albums.find(album => album._id === payload.id).art = payload.art;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}