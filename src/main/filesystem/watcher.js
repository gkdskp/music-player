const chokidar = require('chokidar');
const path = require('path');
const {SUPPORTED_FILE_EXTS, LIBRARY_FOLDERS} = require('../config.json');

const {importSong, deleteSong, removeDeleted} = require('./actions');

const supportedFileGlobs = [];

// Initial sync
removeDeleted();

/* Finding all possible globs to watch for */
LIBRARY_FOLDERS.forEach(folder => {
	SUPPORTED_FILE_EXTS.forEach(file_type => {
		supportedFileGlobs.push(path.join(folder, '**', `*${file_type}`));
	});
});


const watcher = chokidar.watch(supportedFileGlobs);

watcher
	.on('add', path => importSong(path))
	.on('change', path => importSong(path, false))
	.on('unlink', path => deleteSong(path));

