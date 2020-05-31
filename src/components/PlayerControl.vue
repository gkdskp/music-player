<template>
  <div id="control-container">
    <div class="info-container">
      <div class="song-art">
        <img
          src="file:////home/gokul/.config/music-player/Thumbnails/Blur-13 (Special Edition).jpeg"
        />
      </div>
      <div class="song-info">
        <span class="title">{{ currSong.title }}</span>
        <span class="artist subtitle-text">{{ currSong.artist }}</span>
      </div>
    </div>
    <div class="actions-container">
      <div class="controls-container">
        <ion-icon
          name="play-back-sharp"
          class="play-button"
          @click="replay"
        ></ion-icon>
        <ion-icon
          name="pause-sharp"
          class="play-button"
          v-if="isPlaying"
          @click="toggle"
        ></ion-icon>
        <ion-icon
          name="play-sharp"
          class="play-button"
          v-else
          @click="toggle"
        ></ion-icon>
        <ion-icon name="play-forward-sharp" class="play-button"></ion-icon>
      </div>

      <div class="slider-container">
        <div class="duration-info subtitle-text">{{ currentTime }}</div>
        <div class="slider">
          <vue-slider
            v-model="progress"
            @click.native="seek"
            @callback="seek"
          />
        </div>
        <div class="duration-info subtitle-text">{{ totalDuration }}</div>
      </div>
    </div>
    <div class="x"></div>
    <audio ref="audioPlayer">
      <source :src="currSong.file" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import { AudioPlayer, PlayerEvents } from "../player/control";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "PlayerControl",

  components: {
    "vue-slider": VueSlider,
  },

  data() {
    return {
      isPlaying: false,
      currentTime: "00:00",
      totalDuration: "00:00",
      progress: 0,
      currSong: {},
    };
  },

  mounted() {
     PlayerEvents.on("player:loading", () => {
      this.currSong = AudioPlayer.song;
    });

    PlayerEvents.on("player:loaded", () => {
      this.totalDuration = AudioPlayer.totalDuration;
    });

    PlayerEvents.on("player:toggle", () => {
      this.isPlaying = AudioPlayer.isPlaying;
    });

    PlayerEvents.on("player:playing", () => {
      this.progress = AudioPlayer.progress;
      this.currentTime = AudioPlayer.currentTime;
    });

    AudioPlayer.setAudioPlayer(this.$refs.audioPlayer);
    AudioPlayer.setAudioFile();
  },

  methods: {
    replay() {
      AudioPlayer.restart();
    },

    toggle() {
      AudioPlayer.toggle();
    },

    seek() {
      AudioPlayer.seek(this.progress);
    },
  },

  //   mounted() {
  //     player.setAudioPlayer(this.$refs.audioPlayer);
  //     player.emitter.on("playback:progress", (args) => {
  //       this.duration = args.time;
  //       this.time = isNaN(args.progress) ? 0 : args.progress;
  //     });
  //     player.emitter.on("player:load", () => {
  //       this.totalDuration = player.duration;
  //     });
  //   },

  //   methods: {
  //     togglePlay() {
  //       player.toggle();
  //       this.isPlaying = player.isPlaying;
  //     },

  //     replay() {
  //       player.replay();
  //       this.isPlaying = player.isPlaying;
  //     },

  //     seek() {
  //       player.seek(this.time);
  //     },

  //     changeSong() {
  //       this.index++;
  //       player.reload();
  //     },
  //   },
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
  background: rgb(116, 35, 101);
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
  top: 6px;
  display: flex;
  justify-content: center;
  font-size: 3em;
  font-weight: lighter;
}

.actions-container {
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.slider-container {
  display: flex;
}

.slider {
  width: 90%;
  padding: 0px 10px;
}
.play-button {
  padding: 0px 15px;
}
</style>
