const mm = require('music-metadata');

const art = (path) => {
	return new Promise((resolve) => {
		mm.parseFile(path).then(tags => {
			const {picture} = tags.common;
			resolve(`data:${picture[0].format};base64,${picture[0].data.toString('base64')}`);
		})
	});
	
}

module.exports = art;