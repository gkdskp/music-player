const chokidar = require('chokidar');

import {addSong, changeSong, deleteSong} from './actions';

const watcher = chokidar.watch('/home/gokul/Music');

watcher
	.on('add', path => addSong(path))
	.on('change', path => changeSong(path))
	.on('unlink', path => deleteSong(path));
