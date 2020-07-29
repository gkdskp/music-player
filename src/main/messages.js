const { ipcMain } = require('electron');

const {getAllAlbums}  = require('./data/albums');
const { getAllArtists, findArtist } = require('./data/artists');
const { getAllSongs, findSong } = require('./data/songs');

import timeParse from '../renderer/utils/timeparse';



ipcMain.on('albums:all', async event => {
  let albums = await getAllAlbums();
  
  albums = await Promise.all(albums.map(async album => {
    album.artist = await findArtist({'_id': album.artist});

    const song = await findSong({album: album._id});
    // album.art = await art(song.file.name);
    return album;
  }));

  let songs = await getAllSongs();
  songs = songs.map(song => {
    song.performer = song.artists.join(', ');
    song.durationFormatted = timeParse(song.duration);
    // song.album = albums.find(album => album._id === song.album);
    return song;
  });

  let artists = await getAllArtists();
  
  event.reply('albums:list', {albums, songs, artists});
});