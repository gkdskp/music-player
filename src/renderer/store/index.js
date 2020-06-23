import Vuex from 'vuex';
import Vue from 'vue';

import queue from './queue';
import library from './library';
import plugin from './plugin';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		queue,
		library
	},
	plugins: [plugin]
});