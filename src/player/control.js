import { timeParse } from '../utils/timeparse';
const eventsUtil = require('./events');

const PlayerEvents = eventsUtil.PlayerEvents;
const AudioPlayer = {
	player: null,
	isPlaying: false,
	currentTime: '00:00',
	totalDuration: '00:00',
	progress: 0,

	song: {
		
	},

	setAudioPlayer(player) {
		this.player = player;
	},

	setAudioFile(song) {
		this.song = song;
		this.setTotalDuration = false;
		this.player.load();
		if (this.isPlaying) {
			this.play();
		}
		this.totalDuration = timeParse(song.duration * 10);
		eventsUtil.emitLoadEndEvent();
	},


	update() {
		this.currentTime = timeParse(this.player.currentTime * 10);
		this.progress = (this.player.currentTime / this.player.duration) * 100;
		eventsUtil.emitPlayingEvent();
	},

	play() {
		this.player.play();

		this.isPlaying = true;
		eventsUtil.emitStateChangeEvent();
		this.timer = window.setInterval(
			() => {
				this.update()
			}, 500
		);
	},


	pause() {
		this.player.pause();
		this.isPlaying = false;
		eventsUtil.emitStateChangeEvent();
		window.clearInterval(this.timer);
	},

	toggle() {
		this.isPlaying ? this.pause() : this.play();
	},

	seek(timePercent) {
		const seekPos = (timePercent * this.player.duration) / 100;
		if (this.isPlaying) {
			this.pause();
			this.player.currentTime = seekPos;
			console.log("Seeked " + seekPos);
			this.update();
			console.log("Seeked and update " + this.player.currentTime);
			this.play();
			console.log("Seeked and played  " + this.player.currentTime);
		} else {
			this.player.currentTime = seekPos;
		}
	},

	restart() {
		this.seek(0);
	},
}

export { AudioPlayer, PlayerEvents }