<template>
  <div>
    <div class="info-container">
      <div class="song-art" v-if="currSong.file">
        <img :src="`file:///${currSong.albumArt}`" />
      </div>
      <div class="song-info" >
        <span class="title">{{ currSong.title }}</span>
        <span class="artist subtitle-text">{{ currSong.artist }}</span>
      </div>
    </div>
    <div class="actions-container">
      <div class="controls-container">
        <ion-icon name="play-back-sharp" class="play-button"></ion-icon>
        <ion-icon
          name="pause-sharp"
          class="play-button"
          v-if="isPlaying"
          @click="toggle"
        ></ion-icon>
        <ion-icon
          name="play-sharp"
          class="play-button"
          @click="toggle"
          v-else
        ></ion-icon>
        <ion-icon
          name="play-forward-sharp"
          class="play-button"
          @click="playNext"
        ></ion-icon>
      </div>

      <div class="slider-container">
        <div class="duration-info subtitle-text">{{ currentTime }}</div>
        <div class="slider">
          <vue-slider v-model="progress" @change="seek" :drag-on-click="true" tooltip="none" />
        </div>
        <div class="duration-info subtitle-text">{{ totalDuration }}</div>
      </div>
    </div>
    <div class="x"></div>
    <audio ref="audioPlayer" preload="auto">
      <source :src="`file:///${currSong.file.name}`" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
//import { AudioPlayer, PlayerEvents } from "../player/control";
//import  PlayQueue  from '../player/playqueue';
import { timeParse } from "../utils/timeparse";
import { mapGetters } from "vuex";

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
    };
  },

  computed: mapGetters(["playQueue", "currSong"]),

  mounted() {
    //  PlayerEvents.on("player:loading", () => {
    // });

    // PlayerEvents.on("player:loaded", () => {
    //   this.currSong = AudioPlayer.song;
    //   this.totalDuration = AudioPlayer.totalDuration;
    // });

    // PlayerEvents.on("player:toggle", () => {
    //   this.isPlaying = AudioPlayer.isPlaying;
    // });

    // PlayerEvents.on("player:playing", () => {
    //   this.progress = AudioPlayer.progress;
    //   this.currentTime = AudioPlayer.currentTime;
    // });

    // AudioPlayer.setAudioPlayer(this.$refs.audioPlayer);
    // PlayQueue.setCurrent(0);
    //this.totalDuration = '00:50';
    this.$refs.audioPlayer.addEventListener("timeupdate", () => {
      this.currentTime = timeParse(this.$refs.audioPlayer.currentTime * 10);
      this.progress =
        (this.$refs.audioPlayer.currentTime / this.$refs.audioPlayer.duration) *
        100;
    });

    this.$refs.audioPlayer.addEventListener("loadedmetadata", () => {
      this.totalDuration = timeParse(this.$refs.audioPlayer.duration * 10);
    });

    this.$refs.audioPlayer.addEventListener("play", () => {
      this.isPlaying = true;
    });

    this.$refs.audioPlayer.addEventListener("pause", () => {
      this.isPlaying = false;
    });

    this.$refs.audioPlayer.addEventListener("ended", () => {
      this.playNext();
    })
  },

  created() {
  },
  updated() {
  },

  methods: {
    // replay() {
    //   AudioPlayer.restart();
    // },

    toggle() {
      !this.isPlaying ? this.$refs.audioPlayer.play() : this.$refs.audioPlayer.pause();
    },

    // seek(newProgress) {
    //   AudioPlayer.seek(newProgress);
    // },

    // next() {
    //   PlayQueue.setNext();
    // },

    load(autoPlay) {
      this.$refs.audioPlayer.load();
      if(autoPlay) this.$refs.audioPlayer.play();
    },

    playNext() {
      this.$store.commit("playNext");
      this.load(this.isPlaying);
    },

    seek(value) {
      this.$refs.audioPlayer.currentTime = value * this.$refs.audioPlayer.duration/ 100;
    }
  },

  watch: {
    currSong() {
      this.load(true);
    }
  }
};
</script>

<style scoped>


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
