var webpack = require('webpack');
require('dotenv').config();

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1']
				},
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.(gif|png|jpg)$/,
				loader: 'url-loader?limit-200000'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './',
        compress: true,
        disableHostCheck: true,   // That solved it
	},
	plugins: [
		new webpack.DefinePlugin({
			process: {
				env: {
					CLIENT_ID: `'${process.env.CLIENT_ID}'`,
					API_URL: `'${process.env.API_URL}'`,
					REDIRECT_URI: `'${process.env.REDIRECT_URI}'`
				}
			}
		})
	]
};
