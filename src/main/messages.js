const { ipcMain } = require('electron');

const {getAllAlbums}  = require('./data/albums');
const { getAllArtists } = require('./data/artists');
const { getAllSongs } = require('./data/songs');

console.log(getAllAlbums);

ipcMain.on('fetch:all', async event => {
  const albums = await getAllAlbums();
  const songs = await getAllSongs();
  const artists = await getAllArtists();

  event.reply('res:all', {albums, songs, artists});
});

