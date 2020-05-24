const fs = require('fs');
const DataStore = require('nedb');
const { app } = require('electron');
const path = require('path')

const artistDataStore = new DataStore({
	filename: path.join(app.getPath('userData'), 'Datastores/artists.db'),
	autoload: true
});

const addArtist = (artistDoc) => {
	return new Promise(
		(resolve, reject) => {
			artistDataStore.update(
				{ artist: artistDoc.name },
				{
					$set: artistDoc
				},
				{ upsert: true });
			findArtist({ artist: artistDoc.name }, (artist) => {
				console.log(artist._id);
				resolve();
			})
		});
}

const findArtists = (params, callback) => {
	artistDataStore.find(params, (err, docs) => {
		if (err)
			fs.writeFileSync('a.txt', err);
		else {
			callback(docs);
		}
	})
}

const findArtist = (params, callback) => {
	artistDataStore.findOne(params, (err, doc) => {
		if (err)
			fs.writeFileSync('a.txt', err);
		else if (doc)
			callback(doc._id);
		else
			callback('');
	})
}

export { addArtist, findArtists, findArtist };