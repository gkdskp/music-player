const windows = require('electron').BrowserWindow;


const newItem = item => {
	windows.getAllWindows()[0].webContents.send('new:item', item);
}

const removeItem = item => {
	mainWindow.send('remove:item', item);
}

module.exports = { newItem, removeItem };