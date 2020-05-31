import { AudioPlayer } from './control';

const PlayQueue = {
	playlist: [
		{"album":"fxffiYo1Ne2yKG7O","artist":"Radiohead","performer":"Radiohead","trackNum":16,"title":"Motion Picture Soundtrack (Fan Remix)","year":1997,"file":"/home/gokul/Music/Motion Picture Soundtrack (Fan Remix).mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Radiohead-OK Computer OKNOTOK 1997 2017 (Disk 3).jpeg","duration":327.75836734693877,"_id":"O5b3KJQYehOrbqXr"},
{"album":"LyVxE0sBDd5vT5OC","artist":"Beach House","performer":"Beach House","trackNum":3,"title":"Space Song","year":2015,"file":"/home/gokul/Music/Beach House - Space Song.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Beach House-Depression Cherry.jpeg","duration":320.49632653061224,"_id":"PDbcFtPe0JAStpc5"},
{"album":"17fCKqK7jmI3NgnD","artist":"Daft Punk","performer":"Daft Punk","trackNum":1,"title":"Get Lucky (Radio Edit) (feat. Pharrell Williams & Nile Rodgers)","year":2013,"file":"/home/gokul/Music/Daft Punk - Get Lucky (Radio Edit).mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Daft Punk-Get Lucky.jpeg","duration":248.45061224489797,"_id":"EMK9bxTcbOI8twSH"},
{"album":"u9VVT4jrJQog5eSH","artist":"David Bowie","performer":"David Bowie, Nine Inch Nails","trackNum":1,"title":"I'm Afraid Of Americans - Nine Inch Nails V1 Mix","year":1997,"file":"/home/gokul/Music/David Bowie - I'm Afraid Of Americans - Nine Inch Nails V1 Mix.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/David Bowie-Earthling (Expanded Edition).jpeg","duration":330.0832653061224,"_id":"KJJlHGUUeFfWlgSQ"},
{"album":"PNPdi1qJibQ2aTMg","artist":"EOB","performer":"EOB","trackNum":1,"title":"Brasil","year":2019,"file":"/home/gokul/Music/EOB - Brasil.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/EOB-Brasil.jpeg","duration":507.3502040816326,"_id":"iMhkn4YgBfwN4HsG"},
{"album":"vBjfxm4FbDr2BVpr","artist":"How To Destroy Angels","performer":"How To Destroy Angels","trackNum":5,"title":"Ice age","year":2013,"file":"/home/gokul/Music/How to Destroy Angels - Ice age.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/How To Destroy Angels-Welcome Oblivion.jpeg","duration":412.2122448979592,"_id":"t1L9mdpdC6bLSVFB"},
{"album":"5V61Gr7tHEAT6NWk","artist":"Lykke Li","performer":"Lykke Li","trackNum":3,"title":"I follow rivers (The Magician Remix)","year":2011,"file":"/home/gokul/Music/Lykke Li-I follow rivers (The Magician Remix).mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Lykke Li-I Follow Rivers (The Magician Remix) - Single.jpeg","duration":280.39836734693876,"_id":"NlS593U9xpUuwp39"},
{"album":"7jP7dPlWTaab5U5E","artist":"M83","performer":"M83","trackNum":7,"title":"We Own the Sky","year":2016,"file":"/home/gokul/Music/M83 - We Own the Sky.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/M83-Saturdays = Youth.jpeg","duration":302.78530612244896,"_id":"pTSWmbtrOv2dGZvS"},
{"album":"fN3X21O3bX7phkMe","artist":"Nine Inch Nails","performer":"Nine Inch Nails","trackNum":4,"title":"Closer [Precursor]","year":1994,"file":"/home/gokul/Music/Nine Inch Nails - Closer (Precursor).mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Nine Inch Nails-Closer to God.jpeg","duration":435.8791836734694,"_id":"u06mwMsqHA8hR5tA"},
{"album":"J0yMNpchQBt5uozE","artist":"Nine Inch Nails","performer":"Nine Inch Nails","trackNum":8,"title":"Satellite","year":2013,"file":"/home/gokul/Music/Nine Inch Nails - Satellite.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Nine Inch Nails-Hesitation Marks.jpeg","duration":302.78530612244896,"_id":"j37IoxUzq32pMob5"},
{"album":"tCPpiXCa78gY0g7V","artist":"Pink Floyd","performer":"Pink Floyd","trackNum":6,"title":"Comfortably Numb","year":1979,"file":"/home/gokul/Music/Pink Floyd -  Comfortably Numb.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Pink Floyd-The Wall.jpeg","duration":382.3281632653061,"_id":"7PzpM6G243Va7siW"},
{"album":"YUl2ZcHMjBQXjAHr","artist":"Various Artists","performer":"Radiohead","trackNum":11,"title":"Talk Show Host","year":2007,"file":"/home/gokul/Music/Radiohead - Talk Show Host.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Various Artists-Romeo & Juliet Soundtrack.jpeg","duration":257.2538775510204,"_id":"jjTOqzFRvcG6CBtP"},
{"album":"rVzuLGDlihCq7tqS","artist":"Blur","performer":"Blur","trackNum":2,"title":"Song 2","year":2000,"file":"/home/gokul/Music/Blur - Song 2.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Blur-Blur: The Best Of.jpeg","duration":121.9134693877551,"_id":"K30TiXgrdx9QLkRb"},
{"album":"Gp3b312BvvKtPAE1","artist":"Unknown Artist","performer":"Unknown Artist","trackNum":"","title":"Daft Punk - Something About Us.mp3","year":"Unknown Year","file":"/home/gokul/Music/Daft Punk - Something About Us.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/undefined-undefined.jpeg","duration":232.72489795918366,"_id":"ictajeXuOrlRCkjT"},
{"album":"eIcuehBy5J7zIllA","artist":"Gary Numan","performer":"Gary Numan","trackNum":"","title":"Cars","year":1998,"file":"/home/gokul/Music/Gary Numan - Cars.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Gary Numan-The Pleasure Principle (Bonus Track Version).jpeg","duration":237.92326530612246,"_id":"QpE1NdbxJ0NBQ85z"},
{"album":"f7HEhiz1kJG9Yawz","artist":"Josh Woodward","performer":"Josh Woodward","trackNum":1,"title":"Swansong","year":2009,"file":"/home/gokul/Music/Josh Woodward - Swansong.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Josh Woodward-Breadcrumbs.png","duration":261.5640816326531,"_id":"BFpjWTneyHOiKO2B"},
{"album":"fWSjaJI9Yo5j5pjw","artist":"Kavinsky","performer":"Kavinsky","trackNum":1,"title":"Nightcall","year":2010,"file":"/home/gokul/Music/Kavinsky- Nightcall.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/Kavinsky-Nightcall.jpeg","duration":258.45551020408163,"_id":"BYp34pjnpHBQyBuP"},
{"album":"lXDHcQgdgjWc05bT","artist":"My Morning Jacket","performer":"My Morning Jacket","trackNum":6,"title":"Bermuda Highway","year":2001,"file":"/home/gokul/Music/My Morning Jacket - Bermuda Highway.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/My Morning Jacket-At Dawn.jpeg","duration":199.536,"_id":"mOdOjdHngWaVsMPo"},
{"album":"0me29STdkxVwRnI2","artist":"My Morning Jacket","performer":"My Morning Jacket","trackNum":11,"title":"Steam Engine","year":2003,"file":"/home/gokul/Music/My Morning Jacket - Steam Engine.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/My Morning Jacket-It Still Moves.jpeg","duration":448.536,"_id":"Id9xDtIXFVYhotGc"},
{"album":"8jQl2hBXZZsubAX2","artist":"Unknown Artist","performer":"Washed Out","trackNum":5,"title":"Amor Fati","year":2012,"file":"/home/gokul/Music/Washed Out - Amor Fati.mp3","albumArt":"/home/gokul/.config/music-player/Thumbnails/undefined-Love Vol.10: Chillout Music Collection Part 1.jpeg","duration":264.0979591836735,"_id":"c2xPWspmSIIoEKZZ"}
	],
	current: -1,

	addSong: song => {
		PlayQueue.playlist.push(song);
	},

	setCurrent: (index) => {
		console.log(index);
		PlayQueue.current = index;
		AudioPlayer.setAudioFile(PlayQueue.getCurrent());
	},

	getCurrent: () => {
		return PlayQueue.playlist[PlayQueue.current];
	},

	setNext: () => {
		if (PlayQueue.current + 1 < PlayQueue.playlist.length) {
			PlayQueue.setCurrent(PlayQueue.current + 1);
		}
	},

	setPrev: () => {
		if ( PlayQueue.current - 1 >= 0 )
		PlayQueue.setCurrent(PlayQueue.current-1);
	}
}

export default PlayQueue;