const fs = require('fs');
const DataStore = require('nedb');
const { app } = require('electron');
const path = require('path')
const albumDataStore = new DataStore({
	filename: path.join(app.getPath('userData'), 'Datastores/albums.db'),
	autoload: true
});

const addAlbum = (albumDoc, callback) => {
	albumDataStore.update(
		{ title: albumDoc.title, artist: albumDoc.artist },
		{
			$set: albumDoc
		},
		{ upsert: true });
}

const findAlbums = (params, callback) => {
	albumDataStore.find(params, (err, docs) => {
		if (err)
			fs.writeFileSync('a.txt', err);
		else {
			callback(docs);
		}
	})
}

const findAlbum = (params, callback) => {
	albumDataStore.findOne(params, (err, doc) => {
		if (err)
			fs.writeFileSync('a.txt', err);
		else if (doc)
			callback(doc._id);
		else
			callback('');
	})
}

export { addAlbum, findAlbums, findAlbum };