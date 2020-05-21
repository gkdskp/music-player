const chokidar = require('chokidar');

const {addSong, changeSong, deleteSong} = require('./actions');

const watcher = chokidar.watch('/home/gokul/Music');

watcher
	.on('add', path => addSong(path))
	.on('change', path => changeSong(path))
	.on('unlink', path => deleteSong(path));
