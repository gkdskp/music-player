const Spotify = require('node-spotify-api');
const { getAllArtists } = require('../data/artists');
const fs = require('fs');
const request = require('request');

const { CLIENT_ID, CLIENT_SECRET } = require('../config.json');

const fetchArtistImages = async () => {
	const artists = await getAllArtists();
	artists.forEach(artist => {
		if(! fs.existsSync(`images/${artist._id}.jpeg`)) {
			downloadImage(artist);
			setTimeout(() => {
				console.log('Timeout');
			}, 1000);
		}
	});
}

const downloadImage = (artist) => {
	if(! (API_KEY && API_SECRET))
		return;

	const spotify = new Spotify({
		id: CLIENT_ID,
		secret: CLIENT_SECRET
	});
	
	spotify.search({ type: 'artist', query: artist.name, limit: 1}, (err, data) => {
		if(err) console.log(err);
		try { 
			const image = (data.artists.items[0].images[0].url); 

			request.head(image, (err, res) => {
				request(image).pipe(fs.createWriteStream(`images/${artist._id}.jpeg`));
			});
		}
		catch(_) {
	
		}
	});
}


fetchArtistImages();