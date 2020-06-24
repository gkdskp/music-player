const state = {
	albums: [],
}

const getters = {
	getAlbums(state) {
		return state.albums
	},

	getSongs(state) {
		return Array.prototype.concat.apply([], 
			state.albums.map(album => album.songs.map(
				song => {
					song.album = album.title;
					song.performer = song.artists.join(',');
					return song;
				}
			))
		);
	},

	getArtists(state) {
		return [...new Set(state.albums.map(album => album.artist))];
	},

	getAlbum: (state) => (id) => state.albums.find(album => album._id === id), 

	getOneFile: (state) => 
		(id) => state.albums.find(album => album._id === id).songs[0].file.name
};

const actions = {
};

const mutations = {
	LOAD_INITIAL(state, payload) {
		state.albums = payload.albums.map(album => {
			album.artist = payload.artists.find(artist => artist._id === album.artist);
			album.songs = payload.songs.filter(song => song.album === album._id);
			return album;
		});
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
	},

	ADD_IMAGE(state, {id, art}) {
		state.albums.find(album => album._id === id).art = art;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}