const player = {
	audioPlayer: null,
	isPlaying: false,
	autoplay: false,

	setAudioPlayer(player) { this.audioPlayer = player; },

	play() {
		this.audioPlayer.play();
		console.log("Playing");
	},

	pause() {
		this.audioPlayer.pause();
		console.log("Pause");
	},

	toggle() {
		this.isPlaying ? this.pause() : this.play()
		this.isPlaying = !this.isPlaying
	}

}

export default player;