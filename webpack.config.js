module.exports = {
	entry: "./demo02/build/react-02.js",
	output: {
		path:__dirname,
		filename: "demo02/output/bundle.js"
	},
	resolve: {
        extensions: ['', '.js', '.jsx','less']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },
        {
             test: /\.less$/,
             loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        },
        {    test: /\.png$/, 
             loader: "url-loader?mimetype=image/png" 
        }]
    }
}