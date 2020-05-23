import { addAlbum } from '../data/albums';

import getTags from './tag';

const addSong = path => {
	if (path.match('mp3')) {
		getTags(path).then(
			song => {
				const { album, artist, year, albumArt } = song;
				const Album = {
					title: album,
					artist,
					year,
					art: albumArt
				}
				addAlbum(Album, () => {
				});
			}
		)
	}
}

const changeSong = path => {
	const song = getTags(path);
}

const deleteSong = path => {

}

export {
	addSong,
	changeSong,
	deleteSong
};