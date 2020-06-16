import Vuex from 'vuex';
import Vue from 'vue';

import queue from './queue';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		queue
	}
});