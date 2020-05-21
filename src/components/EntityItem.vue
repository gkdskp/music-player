<template>
  <div class="entity-item" :class="{singular: isEntityView, circular: isCircular}">
    <div class="entity-container">
      <div class="entity-art-container">
        <div class="entity-art entity-inner" :style="{backgroundImage: `url('${art}')`}"></div>
        <div class="entity-inner button-container">
          <ion-icon name="play" class="play-button"></ion-icon>
        </div>
      </div>

      <div v-if="isEntityView">
        <span class="entity-title block">{{ title }}</span>
        <span class="entity-artist subtitle-text block" v-if="!isCircular">{{ subtitle }}</span>
        <span class="subtitle-text block">{{ subsubtitle }}</span>
        <button class="primary-btn">
          <ion-icon name="play" />&nbsp;&nbsp;Play
        </button>

        <p class="entity-desc">{{ desc }}</p>
      </div>
      <div v-else>
        <a href="#" class="entity-title block">{{ title }}</a>
        <a href="#" class="entity-artist subtitle-text block">{{ subtitle }}</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EntityItem',
  props: [ 
	'isEntityView',
	'isCircular',
	'title',
	'subtitle',
	'art',
	'subsubtitle',
	'desc'
  ],
};
</script>

<style>
.entity-item {
  display: inline-block;
  margin: 0px 30px 60px 0px;
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

.entity-art-container {
  width: 200px;
  height: 200px;
  position: relative;
}

.entity-art {
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: 5;
}

.entity-art-container .button-container {
  background: rgba(0, 0, 0, 0.5);
}

.circular .entity-art-container .button-container {
  border-radius: 50%;
}

.circular .entity-art {
  border-radius: 50%;
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

.entity-item.singular .button-container {
  display: none;
}

.entity-inner {
  position: absolute;
  width: 100%;
  height: 100%;
}

.entity-title {
  font-weight: bold;
  margin: 9px 0px 3px 0px;
  text-decoration: none;
  font-weight: bolder;
  color: inherit;
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