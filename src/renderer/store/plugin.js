import { ipcRenderer } from "electron"

const updateLibrary = store => {
	ipcRenderer.on('new:item', (event, payload) => {
		console.log('OK');
		switch(payload.type) {
			case 'album':
				console.log('New album');
				store.commit('ADD_ALBUM', payload.object);
				break;
			
			case 'song':
				console.log('New song');
				store.commit('ADD_SONG', payload.object);
				break;

			case 'artist':
				console.log('New artist');
				store.commit('ADD_ARTIST', payload.object);
				break;
		}
	});
}

export default updateLibrary;