const { addSong, findFile, getAllSongs, removeFile } = require('../data/songs');


const getTags = require('./tag');
const fs = require('fs');

const insertSong = async path => addSong(await getTags(path));
const deleteSong = path => removeFile(path);

// Song will only be inserted if it is modified or new
// if checkIfExist is true
const importSong = async (path, checkIfExist = true) => {
	if (checkIfExist) {
		findFile(path)
			.then(song => {
				const modifiedAt = song ? song.file.modifiedAt.getTime() : 0;

				fs.stat(path, async (err, stat) => {
					if (modifiedAt !== stat.mtime.getTime()) {
						// File has been modified or is newly detected
						insertSong(path);
					}
				});
			});

	} else {
		insertSong(path);
	}

}

// Delete records of songs that no longer exists on filesystem
const removeDeleted = () => {
	getAllSongs()
		.then(songs => 
			songs.forEach(song => {
				const file = song.file.name;
				if(!fs.existsSync(file))
					removeFile(file);
			})
		);
}

module.exports = {
	importSong,
	removeDeleted,
	deleteSong
};