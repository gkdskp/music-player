//const fs = require('fs');
const DataStore = require('nedb');
const { app } = require('electron');
const path = require('path')

import { findSongs } from './songs';
import { findArtist } from './artists';

const albumDataStore = new DataStore({
	filename: path.join(app.getPath('userData'), 'Datastores/albums.db'),
	autoload: true
});

const addAlbum = album => {
	return new Promise(
		(resolve) => {
			findAlbum(album).then(
				albumDoc => {
					if (!albumDoc) {
						albumDataStore.update(
							album,
							{ $set: album },
							{ upsert: true },
						);
					}
					findAlbum(album).then(
						albumDoc => 
							resolve(albumDoc)
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
					console.log(err);
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
		albumDoc.songs = await findSongs({ album: id }, true);
	albumDoc.artist = (await findArtist({ _id: albumDoc.artistid })).name;
	return albumDoc
}

const getAlbums = async param => {
	const docs = await findAlbums(param);
	for(let i = 0; i < docs.length; i++) {
		docs[i].artist = (await findArtist({_id: docs[i].artistid})).name;
	}
	return docs;
}

export { addAlbum, getAlbums, findAlbum, findAlbums, getAlbumInfo };