const DataStore = require('nedb');
//const { app } = require('electron');
const path = require('path')

const newItem = require('../utils');
const { getArtist, removeArtist } = require('./artists');

const albumDataStore = new DataStore({
	filename: path.join( //app.getPath('userData'),
		'Datastores/albums.db'),
	autoload: true
});


/* Album fields
	title: String
	aristid: ObjectID('Artist')
	year: Integer
*/

// Returns the id of album record
// Creates a new record if album does not exists
const getAlbum = album => {
	return new Promise((resolve, reject) => {
		getArtist({ name: album.artist })
			.then(async artistid => {
				const key = { title: album.title, artist: artistid };
				album.artist = artistid;

				let albumDoc = await findAlbum(key);
				if (!albumDoc) {
					albumDataStore.update(
						key,
						{ $set: album },
						{ upsert: true },
					);
					albumDoc = await findAlbum(key);
					newItem({
						type: 'album',
						object: albumDoc
					});
				}

				resolve(albumDoc._id);
			})
			.catch(err => reject(err));
	});
}

const findAlbums = params => {
	return new Promise(
		(resolve, reject) => {
			albumDataStore.find(params).sort({ title: 1 }).exec((err, docs) => {
				if (err) reject();
				else resolve(docs);
			});
		}
	);
}

const findAlbum = params => {
	return new Promise(
		(resolve, reject) => {
			albumDataStore.findOne(params, (err, doc) => {
				if (err) reject();
				else resolve(doc);
			});
		}
	);
}

const removeAlbum = async id => {
	const { artist } = (await findAlbum({ _id: id }));

	albumDataStore.remove({ _id: id }, {}, async (err) => {
		if (err) console.log(err);
		else {
			const artistAlbums = await findAlbums({ artist });
			if (!artistAlbums.length)
				removeArtist(artist);
		}
	});
}

const getAllAlbums = () => findAlbums({});

module.exports = { getAlbum, getAllAlbums, removeAlbum };