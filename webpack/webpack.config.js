const path			= require("path");
const glob			= require("glob");
const webpack		= require("webpack");
const srcPath		= path.join(__dirname, "/../");

var entryList		= {};

glob.sync( path.join(srcPath, "pages/*.js") ).forEach(function(filePath){
	var chunkName	= path.relative(srcPath, filePath).slice(0, -3);

	entryList[ chunkName ] = ["./" + chunkName].concat([
		"webpack-hot-middleware/client?reload=true"	
	]);
});

module.exports = {
	devtool	: "cheap-module-source-map",
	context	: srcPath,
	entry	: entryList,
	output	: {
		publicPath	: "/",
		filename	: "[name].js",
		path		: path.join(srcPath, "/build/")
	},
	resolve	: {
		root	: srcPath,
		modulesDirectories	: ["components", "node_modules"]
	},
	module	: {
		loaders	: [
			{ test : /\.js$/, loader : "babel", exclude : /node_modules/ },
			{ test : /\.less$/, loader : "style!css!autoprefixer!less?sourceMap" }
		]		  
	},
	plugins	: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
