<template>
  <div
    class="entity-item"
    :class="{ singular: isEntityView, circular: isCircular }"
  >
    <div class="entity-container">
      <div class="entity-art-container" @click="addSongs">
        <!-- <div
          class="entity-art entity-inner"
          v-if="art"
          :style="{ backgroundImage: `url(${art})` }"
        ></div> -->
        <b-avatar :src="artwork" icon="music-note" :square="shape" :size="artsize"></b-avatar>
      </div>

      <div v-if="isEntityView">
        <span class="entity-title block">{{ title }}</span>
        <router-link
          :to="{ name: subroute, params: { id: subid } }"
          class="entity-artist subtitle-text block"
          v-if="!isCircular"
          >{{ subtitle }}</router-link
        >
        <span class="subtitle-text block">{{ subsubtitle }}</span>
        <button class="primary-btn" @click="addSongs">
          <ion-icon name="play-sharp" />&nbsp;&nbsp;Play
        </button>

        <p class="entity-desc">{{ desc }}</p>
      </div>
      <div v-else>
        <router-link
          :to="{ name: route, params: { id: id } }"
          class="entity-title block"
          >{{ title }}</router-link
        >
        <router-link
          :to="{ name: subroute, params: { id: subid } }"
          class="entity-artist subtitle-text block"
          >{{ subtitle }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import getImage from "../utils/art";

export default {
  name: "EntityItem",

  data() {
    return {
      'artwork': ''
    }
  },

  props: [
    "isEntityView",
    "isCircular",
    "title",
    "subtitle",
    "subsubtitle",
    "art",
    "desc",
    "id",
    "subid",
    "route",
    "subroute",
  ],

  computed: {
    artsize() {
      return (! this.isEntityView) ? '200px': '300px';
    },

    shape() {
      return (this.route != 'artist') ? true: false;
    }
  },

  created() {
    if(! this.art && this.route == 'album') {
      getImage(this.$store.getters.getOneFile(this.id)).then(art => {
        this.artwork = art || '';
        this.$store.commit('ADD_IMAGE', {
          'id': this.id,
          art
        })
      })
    } else {
      this.artwork = this.art;
    }
  },

  methods: {
    addSongs() {
      this.$store.dispatch("addSongsByEntity", {
        type: this.route,
        id: this.id,
      });
    },
  },
};
</script>

<style>
.entity-item {
  display: inline-block;
  margin: 0px 30px 30px 0px;
  font-size: 0.9em;
  width: 200px;
  cursor: pointer;
}

.entity-item.singular {
  cursor: default;
}

.entity-container {
  display: flex;
  flex-direction: column;
}

.primary-btn {
  margin-top: 30px;
  cursor: pointer;
}

.entity-art-container .play-button {
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
  position: absolute;
}

.total-songs {
  float: right;
}

.entity-art-container:hover .entity-art {
  z-index: -1;
}

.entity-item.singular .entity-inner {
  position: relative;
}

.entity-inner {
  position: absolute;
  width: 100%;
  height: 100%;
}

.entity-title {
  margin: 9px 0px 3px 0px;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}

.circular .entity-title {
  text-align: center;
}

.entity-artist {
  text-decoration: none;
  margin-bottom: 5px;
}

.entity-title:hover {
  text-decoration: underline;
}

.singular .entity-title:hover {
  text-decoration: none;
}

.entity-desc {
  text-align: left;
  margin-top: 50px;
  line-height: 150%;
  color: rgb(189, 189, 189);
}

.entity-item.singular {
  width: 300px;
}

.entity-item.singular .entity-art-container {
  width: 300px;
  height: 300px;
}

.entity-item.singular .entity-title {
  font-size: 2em;
  margin: 25px 0px 5px 0px;
}

.entity-item.singular .entity-artist {
  font-size: 1.2em;
}
</style>
