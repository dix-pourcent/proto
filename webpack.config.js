const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: [
		'./src/style.less',
		'./src/index.pug',
		'./src/main.js'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				loaders: ['file-loader?name=[name].html', 'pug-html-loader?pretty&exports=false']
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}]
			}
		]
	}
}	