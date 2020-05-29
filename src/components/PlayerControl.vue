<template>
  <div id="control-container">
    <div class="info-container">
      <div class="song-art">
        <img
          src="file:////home/gokul/.config/music-player/Thumbnails/Blur-13 (Special Edition).jpeg"
        />
      </div>
      <div class="song-info">
        <span class="title">Battle</span>
        <span class="artist subtitle-text">Blur</span>
      </div>
    </div>

    <div class="controls-container">
      <ion-icon name="play-back-sharp" class="play-button"></ion-icon>
      <ion-icon
        name="pause-sharp"
        class="play-button"
        v-if="isPlaying"
        @click="togglePlay"
      ></ion-icon>
      <ion-icon
        name="play-sharp"
        class="play-button"
        v-else
        @click="togglePlay"
      ></ion-icon>
      <ion-icon name="play-forward-sharp" class="play-button"></ion-icon>
    </div>

    <div class="actions-container"></div>

    <audio ref="audioPlayer">
      <source
        src="file:///home/gokul/Music/13 (Special Edition)/01 - French Song (2012 Remaster).mp3"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>

<script>
import player from "../player/control";

export default {
  name: "PlayerControl",

  data() {
    return {
      isPlaying: player.isPlaying,
    };
  },

  mounted() {
    player.setAudioPlayer(this.$refs.audioPlayer);
  },

  methods: {
    togglePlay() {
      player.toggle();
      this.isPlaying = player.isPlaying;
    },
  },
};
</script>

<style scoped>
#control-container {
  width: 100%;
  height: 10%;
  top: 92vh;
  bottom: 0;
  z-index: 999;
  left: 0;
  position: fixed;
  background: #0078D4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.song-art {
  position: relative;
  width: 100px;
  height: 100%;
}

.song-art img {
  left: 0;
  height: 100%;
  width: 100%;
  position: relative;
}

.song-info {
  position: absolute;
  left: 120px;
  top: 6px;
  display: flex;
  flex-direction: column;
}

.song-info .title {
  font-weight: bolder;
}

.controls-container {
  height: 100%;
  width: 200px;
  top: 6px;
  display: flex;
  justify-content: space-between;
  font-size: 3em;
  font-weight: lighter;
}
</style>
