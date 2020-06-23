const state = {
	albums: [],
	songs: [],
	artists: []
}

const getters = {

};

const actions = {

};

const mutations = {
	LOAD_INITIAL(state, payload) {
		state.songs = payload.songs;
		state.albums = payload.albums;
		state.artists = payload.artists;
	},

	ADD_ALBUM(state, album) {
		state.albums = [
			...state.albums,
			album
		]
	},

	ADD_SONG(state, song) {
		state.songs = [
			...state.songs,
			song
		]
	},

	ADD_ARTIST(state, artist) {
		state.artist = [
			...state.artist,
			artist
		]
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}