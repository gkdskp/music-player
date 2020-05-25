const fs = require('fs');
const DataStore = require('nedb');
const { app } = require('electron');
const path = require('path')

const artistDataStore = new DataStore({
	filename: path.join(app.getPath('userData'), 'Datastores/artists.db'),
	autoload: true
});

const addArtist = artist => {
	return new Promise((resolve, reject) => {
		findArtist(artist)
			.then((artistDoc) => {
				if(! artistDoc) {
					artistDataStore.update(
						artist,
						{$set: artist},
						{upsert: true}
					);
				}
				findArtist(artist)
					.then((artistDoc) => resolve(artistDoc));
			})
	});
}

const findArtists = params => {
	return new Promise((resolve, reject) => {
		artistDataStore.find(params).sort({name: 1}).exec((err, docs) => {
			if(err) {
				// log error
				reject();
			} 
			else {
				resolve(docs);
			}
		})
	});
}

const findArtist = params => {
	return new Promise((resolve, reject) => {
		artistDataStore.findOne(params, (err, doc) => {
			if(err) {
				// log error
				reject(err);
			}
			// else if(doc) {
			// 	resolve(doc);
			// }
			else {
				resolve(doc);
			}
		})
	});
}


export { addArtist, findArtists, findArtist };