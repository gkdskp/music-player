const fs = require('fs');

const mimeMap = {
	'image/bmp': 'bmp',
	'image/x-bmp': 'bmp',
	'image/x-bitmap': 'bmp',
	'image/x-xbitmap': 'bmp',
	'image/x-win-bitmap': 'bmp',
	'image/x-windows-bmp': 'bmp',
	'image/ms-bmp': 'bmp',
	'image/x-ms-bmp': 'bmp',
	'image/cdr': 'cdr',
	'image/x-cdr': 'cdr',
	'image/gif': 'gif',
	'image/x-icon': 'ico',
	'image/x-ico': 'ico',
	'image/vnd.microsoft.icon': 'ico',
	'image/jp2': 'jp2',
	'image/jpx': 'jp2',
	'image/jpm': 'jp2',
	'image/jpeg': 'jpeg',
	'image/jpg': 'jpg',
	'image/pjpeg': 'jpeg',
	'image/png': 'png',
	'image/x-png': 'png',
	'image/vnd.adobe.photoshop': 'psd',
	'image/svg+xml': 'svg',
	'image/tiff': 'tiff',
	'image/webp': 'webp',
}

const storeFile = (image, album, artist) => {
	const ext = mimeMap[image.format] || image.format;
	if (image) {
		fs.writeFileSync(`public/data/${artist}-${album}.${ext}`, image.data);
		return `data/${artist}-${album}.${ext}`;
	}
}

module.exports = storeFile;