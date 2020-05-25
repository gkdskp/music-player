import { addAlbum } from '../data/albums';
import { addArtist } from '../data/artists';
import { addSong } from '../data/songs';

import getTags from './tag';

const importSong = path => {
	if (path.match('mp3')) {
		getTags(path).then(
			song => {
				const { album, artist, year, albumArt } = song;
				const Album = {
					title: album,
					year,
					art: albumArt
				}
				addArtist({ name: artist })
					.then(
						artistDoc => {
							Album.artistid = artistDoc? artistDoc._id: null;
							return addAlbum(Album);
						}
					)
					.then(
						albumDoc => {
							song.album = albumDoc? albumDoc._id: null,
							addSong(song)
						}
					);
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
	importSong,
	changeSong,
	deleteSong
};