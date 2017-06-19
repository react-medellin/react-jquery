var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3002
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react', 'stage-0']
					}
				}
			},
			{
		    test: /(\.css|\.scss|\.sass)$/,
				use: [{
						loader: "style-loader"
				}, {
						loader: "css-loader"
				}, {
						loader: "autoprefixer-loader"
				}, {
						loader: "sass-loader"
				}]
			}
		]
	}
}
