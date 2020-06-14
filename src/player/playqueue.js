import { AudioPlayer } from './control';

const PlayQueue = {
	playlist: [
		{"album":"UPLGCgB0xNNTsbvY","artist":"Unknown Artist","performer":"aswekeepsearching","trackNum":"","title":"At Long Last","year":2016,"file":"/home/gokul/Music/aswekeepsearching - At Long Last.flac","albumArt":"/home/gokul/.config/music-player/Thumbnails/undefined-At Long  Last.jpeg","duration":195.1895,"_id":"7vaOKQbr6UIbIU6y"}],
	current: -1,

	addSong: song => {
		PlayQueue.playlist.push(song);
	},

	setCurrent: (index) => {
		console.log(index);
		PlayQueue.current = index;
		AudioPlayer.setAudioFile(PlayQueue.getCurrent());
	},

	getCurrent: () => {
		return PlayQueue.playlist[PlayQueue.current];
	},

	setNext: () => {
		if (PlayQueue.current + 1 < PlayQueue.playlist.length) {
			PlayQueue.setCurrent(PlayQueue.current + 1);
		}
	},

	setPrev: () => {
		if ( PlayQueue.current - 1 >= 0 )
		PlayQueue.setCurrent(PlayQueue.current-1);
	}
}

export default PlayQueue;