const state = {
	queue: [],
	currSongIndex: 0,
};

const getters = {
	playQueue: state => state.queue,
	currSong: state => (state.currSongIndex >= 0 && state.currSongIndex < state.queue.length) ? state.queue[state.currSongIndex] : {}
};

const actions = {
	addSongsByEntity: ({ commit, getters }, entity) => {
		if(entity.reset) 	commit('removeAll');
		if (entity.type == 'album') {
			commit('addSongs', getters.getAlbumSongs(entity.id));
		} else if (entity.type == 'artist') {
			commit('addSongs', getters.getArtistSongs(entity.id));
		}
	}
};

const mutations = {
	addSongs: (state, songs) => {
		console.log(state.queue);
		state.queue = [
			...state.queue,
			...songs,
		];
	},

	setSongs: (state, songList) => {
		state.queue = [
			...songList
		];
		state.currSongIndex = 0;
	},

	setSong: (state, song) => {
		state.queue = [song];
		state.currSongIndex = 0;
	},

	setCurrent: (state, song) => {
		state.currSongIndex = state.queue.indexOf(song)
	},

	playNext: (state) => {
		state.currSongIndex = (state.currSongIndex + 1) % state.queue.length;
	},

	removeAll: (state) => {
		state.queue = [];
		state.currSongIndex = 0;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}