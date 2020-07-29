<template>
  <span class="text">
    <span v-b-tooltip.hover v-if="text.length > 40" :title=text>
      {{ textStr }}
    </span>
	<span v-else>{{ text }}</span>
  </span>
</template>

<script>
export default {
	name: 'Texst',

	props: [
		'text'
	],

	computed: {
		textStr() {
			return this.text.substr(0, 40) + ((this.text.substr(40, 41)) ? '...': '');
		}
	}
};
</script>

<style>
</style>
