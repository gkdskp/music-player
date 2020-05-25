const fs = require('fs');
const DataStore = require('nedb');
const { app } = require('electron');
const path = require('path')

import { findSongs } from './songs';
import { findArtist } from './artists';

const albumDataStore = new DataStore({
	filename: path.join(app.getPath('userData'), 'Datastores/albums.db'),
	autoload: true
});

// const addAlbum = (albumDoc) => {
// 	albumDataStore.update(
// 		{ title: albumDoc.title, artist: albumDoc.artist },
// 		{ $set: albumDoc },
// 		{ upsert: true },
// 	);
// }

const addAlbum = album => {
	return new Promise(
		(resolve, reject) => {
			findAlbum(album).then(
				albumDoc => {
					if (!albumDoc) {
						albumDataStore.update(
							{ title: album.title, artistid: album.artistid },
							{ $set: album },
							{ upsert: true },
						);
					}
					findAlbum(album).then(
						albumDoc => resolve(albumDoc)
					);
				});
		});
}

const findAlbums = params => {
	return new Promise(
		(resolve, reject) => {
			albumDataStore.find(params).sort({title: 1}).exec((err, docs) => {
				if (err) {
					// log
					reject();
				} else {
					resolve(docs);
				}
			});
		}
	);
}

const findAlbum = params => {
	return new Promise(
		(resolve, reject) => {
			albumDataStore.findOne(params, (err, doc) => {
				if (err) {
					//log error
					reject();
				} else {
					resolve(doc);
				}
			});
		}
	);
}

const getAlbumInfo = async (id, songList) => {
	// );
	const albumDoc = await findAlbum({ _id: id });
	if (songList)
		albumDoc.songs = await findSongs({ album: id }, true);;
	albumDoc.artist = (await findArtist({ _id: albumDoc.artistid })).name;
	return albumDoc
}

const getAlbums = async param => {
	const docs = await findAlbums(param);
	return docs;
}

export { addAlbum, getAlbums, findAlbum, getAlbumInfo };