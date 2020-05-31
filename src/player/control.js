// import { EventEmitter } from 'events';

// import { timeParse } from '../utils/timeparse';

// const player = {
// 	audioPlayer: null,
// 	isPlaying: false,
// 	autoplay: false,
// 	counter: 0,
// 	duration: '00:00',
// 	emitter: new EventEmitter(),

// 	setAudioPlayer(player) { 
// 		this.audioPlayer = player; 

// 	},

// 	play() {
// 		this.audioPlayer.play();
// 		this.emitter.emit('playback:playing');
// 		this.timer = window.setInterval(() => {
// 			this.counter++;
// 			this.emitter.emit('playback:progress', {
// 				time: timeParse(this.audioPlayer.currentTime * 10),
// 				progress: (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100,
// 			})
// 		}, 100);
// 		this.duration = timeParse(this.audioPlayer.duration * 10); 
// 		this.emitter.emit('player:load');
// 	},

// 	pause() {
// 		this.audioPlayer.pause();
// 		this.emitter.emit('playback:paused');
// 		window.clearInterval(this.timer);
// 	},

// 	toggle() {
// 		this.isPlaying ? this.pause() : this.play()
// 		this.isPlaying = !this.isPlaying
// 	},

// 	replay() {
// 		this.audioPlayer.pause();
// 		this.audioPlayer.currentTime = 0;
// 		this.counter = 0;
// 		this.play();
// 	},

// 	seek(time) {
// 		const timeUnit = time * (this.audioPlayer.duration * 10) / 100;
// 		this.audioPlayer.pause();
// 		this.counter = timeUnit;
// 		this.audioPlayer.currentTime = timeUnit / 10;
// 		this.audioPlayer.play();
// 	},

// 	reload() {
// 		this.counter = 0;
// 		this.audioPlayer.load();
// 		this.duration = timeParse(parseInt(this.audioPlayer.duration * 10));
// 		this.emitter.emit('player:load')
// 		this.audioPlayer.currentTime = 0;
// 		this.audioPlayer.play();
// 	}

// }

// export default player;
// import { EventEmitter } from 'events';

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
		"title": "Battle",
		"albumid": "avAiFMfvoBHYAAid",
		"artist": "Blur",
		"artistid": "GF2iYjy9GQFezZny",
		"file": "file:///home/gokul/Music/13 (Special Edition)/04 - X-Offender (Damon _ Control Freak's Bugman Remix).mp3"
	},

	setAudioPlayer(player) {
		this.player = player;
	},

	setAudioFile() {
		// this.song = song;
		eventsUtil.emitLoadStartEvent();
		this.player.load();
		if (this.isPlaying) {
			this.play();
		}
	},

	play() {
		if (this.player.currentTime == 0) {
			this.player.play();
			this.totalDuration = timeParse(this.player.duration * 10);
			eventsUtil.emitLoadEndEvent();
		} else {
			this.player.play();
		}

		this.isPlaying = true;
		eventsUtil.emitStateChangeEvent();
		this.timer = window.setInterval(
			() => {
				this.currentTime = timeParse(this.player.currentTime * 10);
				this.progress = (this.player.currentTime / this.player.duration) * 100;
				eventsUtil.emitPlayingEvent();
			}, 100
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
			this.play();
		} else {
			this.player.currentTime = seekPos;
		}
	},

	restart() {
		this.seek(0);
	},
}

export { AudioPlayer, PlayerEvents }