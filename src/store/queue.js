import { ipcRenderer } from 'electron';

const state = {
	queue: [],
	currSongIndex: 0,
};

const getters = {
	playQueue: state => state.queue,
	currSong: state => (state.currSongIndex >= 0 && state.currSongIndex < state.queue.length) ? state.queue[state.currSongIndex] : {}
};

const actions = {
	addSongsByEntity: ({ commit }, entity) => {
		if (entity.type == 'album') {
			ipcRenderer.send('find-album', entity.id);
			ipcRenderer.once('album-info', (event, album) => {
				commit('setSongs', album.songs);
			});
		} else if (entity.type == 'artist') {
			commit('removeAll');
			ipcRenderer.send('find-artist-songs', entity.id);
			ipcRenderer.on('artist-songs', (event, songs) => {
				console.log(songs);
				commit('addSongs', songs);
			})
		}
	}
};

const mutations = {
	addSongs: (state, songs) => {
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