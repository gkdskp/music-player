const mm = require('music-metadata');
const storeFile = require('./handleArt');


const getTags = (file) => {
	return mm.parseFile(file).then(
		tag => {
			return {
				album: tag.common.album || '',
				artist: tag.common.albumartist || '',
				trackNum: tag.common.track.no || '',
				title: tag.common.title || '',
				year: tag.common.year,
				file,
				albumArt: storeFile(tag.common.picture[0], tag.common.album, tag.common.albumartist)
			}
		}
	)
	.catch('Couldnt parse metadata');
}

module.exports = getTags;