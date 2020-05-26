import { findAlbum } from './albums';


const DataStore = require('nedb');
const { app } = require('electron');
const path = require('path')

const songDataStore = new DataStore({
	filename: path.join(app.getPath('userData'), 'Datastores/songs.db'),
	autoload: true
});

const addSong = song => {
	return new Promise((resolve, reject) => {
		findSong(song)
			.then((songDoc) => {
				if(! songDoc) {
					songDataStore.update(
						song,
						{$set: song},
						{upsert: true}
					);
				}
				findSong(song)
					.then((songDoc) => resolve(songDoc));
			})
	});
}

const findSongs = (params, sortByTrackNum) => {
	return new Promise((resolve, reject) => {
		const cursor = songDataStore.find(params);
		const sortedCursor = sortByTrackNum? cursor.sort({trackNum: 1}): cursor.sort({title: 1});
		sortedCursor.exec((err, docs) => {
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

const findSong = params => {
	return new Promise((resolve, reject) => {
		songDataStore.findOne(params, (err, doc) => {
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

const getSongs = async (param, sortByTrackNum) => {
	const songs = await findSongs(param, sortByTrackNum);
	for(let i = 0; i < songs.length; i++)
		songs[i].album = (await findAlbum({_id: songs[i].album})).title;
	return songs;
}

export { addSong, findSongs, findSong, getSongs };