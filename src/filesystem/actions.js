import { addAlbum } from '../data/albums';
import { addArtist } from '../data/artists';
import { addSong } from '../data/songs';

import getTags from './tag';

const importSong = async path => {
	if (path.match('mp3') || path.match('.flac')) {
		const song = await getTags(path);
		const { album, artist, year, albumArt } = song;
		const Album = {
			title: album,
			year,
			art: albumArt
		}

		Album.artistid = (await addArtist({name: artist}))._id;		
		song.album = (await addAlbum(Album))._id;
		addSong(song);
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