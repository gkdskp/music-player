const fs = require('fs');
const getTags = require('./tag');

const addSong = path => {
	if(path.match('mp3')) {
		getTags(path).then(
			song => {
				const { album, artist, albumArt } = song;
				const file = fs.readFileSync('src/sample/albums.json');
				const data = JSON.parse(file.toString());
				const albumList = data['albumList'] || [];
				const duplicate = albumList.filter(
					elem => elem.artist == artist && elem.album == album
				)
				if (!duplicate.length)
					albumList.push({ album, artist, albumArt });
	
				fs.writeFileSync('src/sample/albums.json', JSON.stringify({ albumList }));

				const file2 = fs.readFileSync('src/sample/song.json');
				const data2 = JSON.parse(file2.toString());
				const songList = data2['songList'] || [];
			
				songList.push(song);
	
				fs.writeFileSync('src/sample/song.json', JSON.stringify({ songList }));
			}
		)
	}
}

const changeSong = path => {
	const song = getTags(path);
}

const deleteSong = path => {

}

module.exports = {
	addSong,
	changeSong,
	deleteSong
};