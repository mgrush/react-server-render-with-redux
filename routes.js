import Container			from "./components/Container";

if( typeof require.ensure !== "function" ){
	require.ensure		= (d, c) => c(require);
}

export default {
	path		: "/",
	component	: Container,

	getChildRoutes(location, callback){
		require.ensure([], (require) => {
			callback(null, [
				require("./components/Books"),
				require("./components/Movies")
			]);
		});
	},

	indexRoute	: {
		component	: require("./components/Books")			  
	}
}

