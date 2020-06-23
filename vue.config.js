module.exports = {
	pluginOptions: {
	  electronBuilder: {
		mainProcessFile: './src/main/background.js'
	  }
	},
	pages: {
	  index: './src/renderer/main.js'
	}
  }