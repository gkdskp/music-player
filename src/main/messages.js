const { ipcMain } = require('electron');

const { getAllAlbums } = require('./data/albums');
const { getAllArtists } = require('./data/artists');
const { getAllSongs } = require('./data/songs');

// ipcMain.on('find-albums', (event) => {
//   getAlbums({}).then((albums) => {
//     event.reply('albums-list', albums);
//   })
// })

ipcMain.on('albums:all', async event => {
  getAllAlbums().then(albums => event.reply('albums:res', albums));
});

ipcMain.on('artists:all', async event => {
  event.reply('artists:res', (await getAllArtists()));
});

ipcMain.on('songs:all', async event => {
  event.reply('songs:res', (await getAllSongs()));
});


// ipcMain.on('find-artists', (event) => {
//   findArtists({}).then((artists) => {
//     event.reply('artists-list', artists);
//   })
// })

// ipcMain.on('find-album', (event, id) => {
//   getAlbumInfo(id, true).then((album) => {
//     event.reply('album-info', album);
//   })
// })

// ipcMain.on('find-artist', (event, args) => {
//   getArtist(args).then((artist) => {
//     event.reply('artist-info', artist);
//   });
// })

// ipcMain.on('find-artist-songs', (event, args) => {
//   console.log('OK');
//   getArtistSongs(args).then((songs) => {
//     event.reply('artist-songs', songs);
//   });
// })


// ipcMain.on('find-songs', event => {
//   getSongs({}).then(songs =>
//     event.reply('songs-list', songs)  
//   );
// })