import VueRouter from 'vue-router';

import AlbumView from './views/AlbumView';
import AlbumsView from './views/AlbumsView';
import ArtistsView from './views/ArtistsView';
import ArtistView from './views/ArtistView';
import SongsView from './views/SongsView';

export default new VueRouter({
	linkActiveClass: "current",
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
