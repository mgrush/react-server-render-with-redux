import App			from "./components/App";
import Books		from "./components/Books";
import Movies		from "./components/Movies";

if (typeof require.ensure !== 'function'){
	require.ensure = (d, c) => c(require);
}

export default {
	path : "/",
	component : App,

	getChildRoutes(location, callback){
		require.ensure([], (require) => {
			callback(null, [
				Books,
				Movies
			]);
		});
	},

	indexRoute : {
		component : Books
	}
};
