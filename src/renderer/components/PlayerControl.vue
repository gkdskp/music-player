<template>
  <div class="player-container">
    <div class="left-container">
      <div class="art"><b-avatar size="8vh" square :src="picture" /></div>
      <div class="info">
        <span class="title subtitle-text"> <b>{{ currSong.title }} </b></span>
        <span class="performer subtitle-text">{{ currSong.performer }} </span>
      </div>
    </div>

    <div class="center-container">
       <div class="controls-container">
        <ion-icon name="play-back-sharp" class="play-button"></ion-icon>
        <ion-icon
          name="pause-sharp"
          v-if="isPlaying"
          class="play-button"
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

    <div class="right-container">
     <ion-icon name="repeat-sharp"></ion-icon>
        <ion-icon
          name="shuffle-sharp"
          @click="toggle"
          class="center"
        ></ion-icon>
        <ion-icon
          name="list-sharp"
          v-b-toggle.sidebar-right
        ></ion-icon>
    </div>
    <audio ref="audioPlayer" preload="auto">
      <source :src="`file:///${currSong.file.name}`" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import timeParse from "../utils/timeparse";
import art from "../utils/art";

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
      picture: ''
    };
  },

  computed: mapGetters(["playQueue", "currSong"]),

  mounted() {
    this.$refs.audioPlayer.addEventListener("timeupdate", () => {
      this.currentTime = timeParse(this.$refs.audioPlayer.currentTime);
      this.progress = 
        (this.$refs.audioPlayer.currentTime / this.$refs.audioPlayer.duration) *
        100 || 0;
    });

    this.$refs.audioPlayer.addEventListener("loadedmetadata", () => {
      this.totalDuration = timeParse(this.$refs.audioPlayer.duration);
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
    this.load();
  },

  created() {
  },
  updated() {
  },

  methods: {
    toggle() {
      !this.isPlaying ? this.$refs.audioPlayer.play() : this.$refs.audioPlayer.pause();
    },

    load() {
      art(this.currSong.file.name).then(art => this.picture = art);
      this.$refs.audioPlayer.load();
      this.$refs.audioPlayer.play();
    },

    playNext() {
      this.$store.commit("playNext");
      this.load(this.isPlaying);
    },

    seek(value) {
      this.$refs.audioPlayer.currentTime = value * this.$refs.audioPlayer.duration/ 100;
    },

    
  },

  watch: {
    currSong(newSong, oldSong) {
      if(newSong != oldSong) this.load(true);
    }
  }
};
</script>

<style scoped>
.player-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.left-container {
  display: flex;
  width: 500px;
  top: 6px;
}

.info {
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  justify-content: flex-start;
}

.center-container {
  width: 500px;
  display: flex;
  flex-direction: column;
}

.controls-container {
  top: 6px;
  display: flex;
  justify-content: center;
  font-size: 3em;
  font-weight: lighter;
}

.slider-container {
  display: flex;
}

.slider {
  width: 90%;
  padding: 0px 10px;
}
.right-container {
  font-size: 1.5em;
  padding-right: 6px;
  padding-top: 6px;
  align-content: center;
  width: 500px;
  text-align: right;
}

.center {
  padding: 0px 6px;
}
</style>
