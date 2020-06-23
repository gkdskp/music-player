const { getAlbum, removeAlbum } = require('./albums');
// import { findArtist } from './artists';

const DataStore = require('nedb');
//const { app } = require('electron')
const path = require('path')

const songDataStore = new DataStore({
	filename: path.join('Datastores/songs.db'), // TODO: Change to app.getPath('userData'), 
	timestampData: true,
	autoload: true
});

songDataStore.ensureIndex({ fieldName: 'file', unique: true }, function (err) {
	console.log('Already exists');
});

/* Song fields
	title: String
	album: ObjectID('Album')
	artists: List
	genre: List
	year: Integer
	track: {
		no: int,
		of: int
	}
	duration: String
	bitrate: String
	file: {
		name: String
		modifiedAt: String
	}
*/

// Songs must be checked for duplicates before insertion
// This function does not return anything
const addSong = song => {
	getAlbum({ title: song.album, artist: song.albumartist })
		.then(albumid => {
			song.album = albumid;
			delete song.albumartist;
			songDataStore.update(
				{ 'file.name': song.file.name },
				{ $set: song },
				{ upsert: true }
			);
		})
		.catch(err => console.log('Error adding song ' + song.title + ' ' + err));
}

const removeSong = async param => {
	const { album } = (await findSong(param));

	songDataStore.remove(param, {}, async (err) => {
		if (err) console.log(err);
		else {
			const albumSongs = await findSongs({ album });
			if (!albumSongs.length)
				removeAlbum(album);
		}
	});
}

const removeFile = file => removeSong({ 'file.name': file });

const findFile = file => findSong({ 'file.name': file });

const getAllSongs = () => findSongs({});

const findSongs = (params, sortByTrackNum) => {
	return new Promise((resolve, reject) => {
		const cursor = songDataStore.find(params);
		const sortedCursor = sortByTrackNum ? cursor.sort({ trackNum: 1 }) : cursor.sort({ title: 1 });
		sortedCursor.exec((err, docs) => {
			if (err) reject();
			else resolve(docs);
		})
	});
}

const findSong = params => {
	return new Promise((resolve, reject) => {
		songDataStore.findOne(params, (err, doc) => {
			if (err) reject();
			else resolve(doc);
		})
	});
}

// const getSongs = async (param, sortByTrackNum) => {
// 	const songs = await findSongs(param, sortByTrackNum);
// 	for(let i = 0; i < songs.length; i++)
// 		songs[i].album = (await findAlbum({_id: songs[i].album})).title;
// 	return songs;
// }

module.exports = {
	removeFile,
	findFile,
	addSong,
	findSongs,
	getAllSongs,
	findSong,
};