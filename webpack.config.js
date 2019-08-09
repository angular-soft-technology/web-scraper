const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './Componente/react/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module : {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			},

		},
		{
        test: /\.css$/i,
        use: ['to-string-loader', 'css-loader'],
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
         

	]
	}]},




	plugins: [
		new htmlWebpackPlugin({
			template: './Client/development/index.html'
		})
	]
};


