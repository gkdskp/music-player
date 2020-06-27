const mm = require('music-metadata');

export default (path, isSong = false) => {
	return new Promise((resolve) => {
		mm.parseFile(path).then(tags => {
			let {picture} = tags.common;
			if(! isSong)
				resolve(`data:${picture[0].format};base64,${picture[0].data.toString('base64')}`);
			
			picture = picture[1] || picture[0];
			resolve(`data:${picture.format};base64,${picture.data.toString('base64')}`)
		})
	});
	
}