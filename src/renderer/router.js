import VueRouter from 'vue-router';

import AlbumView from './components/views/AlbumView';
import AlbumsView from './components/views/AlbumsView';
import ArtistsView from './components/views/ArtistsView';
import ArtistView from './components/views/ArtistView';
import SongsView from './components/views/SongsView';

export default new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: [
		{
			path: "/",
			redirect: "/album"
		},
		{
			path: '/songs/',
			component: SongsView
		},
		{
			path: '/artists/:id',
			name: 'artist',
			component: ArtistView
		},
		{
			path: '/artists',
			component: ArtistsView,
		},
		{
			path: '/album',
			component: AlbumsView,
		},
		{
			path: '/album/:id',
			name: "album",
			component: AlbumView
		}
	]
});
