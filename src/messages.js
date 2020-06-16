import { ipcMain } from 'electron';
import { getAlbumInfo, getAlbums } from './data/albums';
import { findArtists, getArtistSongs, getArtist } from './data/artists';
import { getSongs } from './data/songs';
// const fs = require('fs');

ipcMain.on('find-albums', (event) => {
  getAlbums({}).then((albums) => {
    event.reply('albums-list', albums);
  })
})

ipcMain.on('find-artists', (event) => {
  findArtists({}).then((artists) => {
    event.reply('artists-list', artists);
  })
})

ipcMain.on('find-album', (event, id) => {
  getAlbumInfo(id, true).then((album) => {
    event.reply('album-info', album);
  })
})

ipcMain.on('find-artist', (event, args) => {
  getArtist(args).then((artist) => {
    event.reply('artist-info', artist);
  });
})

ipcMain.on('find-artist-songs', (event, args) => {
  console.log('OK');
  getArtistSongs(args).then((songs) => {
    event.reply('artist-songs', songs);
  });
})


ipcMain.on('find-songs', event => {
  getSongs({}).then(songs =>
    event.reply('songs-list', songs)  
  );
})