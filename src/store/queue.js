const state = {
	queue: [],
	currSongIndex: 0,
};

const getters = {
	playQueue: state => state.queue,
	currSong: state => (state.currSongIndex >= 0 && state.currSongIndex < state.queue.length) ? state.queue[state.currSongIndex] : {}
};

const actions = {

};

const mutations = {
	addSong: (state, song) => {
		state.queue = [
			...state.queue,
			song,
		];
	},

	setSong: (state, song) => {
		state.queue = [song];
		state.currSongIndex = 0;
	},

	playNext: (state) => {
		state.currSongIndex = (state.currSongIndex + 1) % state.queue.length;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}