const DataStore = require('nedb');
// const { app } = require('electron');
const path = require('path');

const artistDataStore = new DataStore({
	filename: path.join(//app.getPath('userData'),
	 'Datastores/artists.db'),
	autoload: true
});

// Returns the id of artist record
// Creates if artist does not exists
const getArtist = artist => {
	return new Promise(async (resolve, reject) => {
		const artistDoc = await findArtist(artist);
		if (!artistDoc) artistDataStore.update(
			artist,
			{ $set: artist },
			{ upsert: true },
		);
		
		resolve((await findArtist(artist))._id);
	});
}

const findArtists = params => {
	return new Promise((resolve, reject) => {
		artistDataStore.find(params).sort({ name: 1 }).exec((err, docs) => {
			if (err) reject(err);
			else resolve(docs);
		})
	});
}

const findArtist = params => {
	return new Promise((resolve, reject) => {
		artistDataStore.findOne(params, (err, doc) => {
			if (err) reject(err);
			else resolve(doc);
		})
	});
}

const getAllArtists = () => findArtists({});

const removeArtist = id => {
	artistDataStore.remove({_id: id}, {}, err => console.log(err));
}



module.exports = { getArtist, getAllArtists, removeArtist };