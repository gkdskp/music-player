const mm = require('music-metadata');
const path = require('path');
const fs = require('fs');

module.exports = file => {
	return new Promise(async (resolve, reject) => {
		const {common, format} = await mm.parseFile(file);

		fs.stat(file, (err, stat) => {
			if(err)
				reject('Failed to read file metadata' + file);

			else {
				resolve({
					title: common.title || path.parse(file).name,
					album: common.album || 'Unknown Album',
					artists: common.artists || [common.artist] || [common.albumartist] || ['Unknown Artist'],
					albumartist: common.albumartist || 'Unknown Artist',
					genre: common.genre || [],
					year: common.year || '',
					track: common.track || {no: 0, of: 0},
					duration: format.duration,
					bitrate: format.bitrate,
					file: {
						name: file,
						modifiedAt: stat.mtime
					}
				});
			}
		});
	});
}
