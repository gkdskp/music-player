const chokidar = require('chokidar');

import {importSong, changeSong, deleteSong} from './actions';

const watcher = chokidar.watch('/home/gokul/Music');

watcher
	.on('add', path => importSong(path))
	.on('change', path => changeSong(path))
	.on('unlink', path => deleteSong(path));
