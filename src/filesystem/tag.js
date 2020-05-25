const mm = require('music-metadata');
const path = require('path');
import storeFile from './handleArt';

const getTags = (file) => {
	return mm.parseFile(file).then(
		tag => {
			return {
				album: tag.common.album || 'Unknown Album',
				artist: tag.common.albumartist || 'Unknown Artist',
				trackNum: tag.common.track.no || '',
				title: tag.common.title || path.basename(file),
				year: tag.common.year,
				file,
				albumArt: storeFile(tag.common.picture[0], tag.common.album, tag.common.albumartist) || ''
			}
		}
	)
	.catch('Couldnt parse metadata');
}

export default getTags;