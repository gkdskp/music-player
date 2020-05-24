import { ipcMain } from 'electron';
import {findAlbums, findAlbum} from './data/albums';
import { findArtists } from './data/artists';
const fs = require('fs');

ipcMain.on('find-albums', (event) => {
  findAlbums({}, (albums) => {
    event.reply('albums-list', albums);
  })
})

ipcMain.on('find-artists', (event) => {
  findArtists({}, (artists) => {
    event.reply('artists-list', artists);
  })
})

ipcMain.on('find-album', (event, args) => {
  fs.writeFileSync('a.txt', args);
  findAlbum(args, (album) => {
    event.reply('album-info', album);
  })
})