import React			from "react";
import MovieItem		from "../movieItem";
import { Link }			from "react-router";
import { connect }		from "react-redux";

typeof window != "undefined" && require("./index.less");

if (typeof require.ensure !== 'function'){
	require.ensure = (d, c) => c(require);
}

@connect(state => ({ moviesList : state.moviesList }))
class Movies extends React.Component {
	render(){
		return (
			<div className="m-movies">
				<div className="m-movie-sidebar">
				{this.props.moviesList.map((movieName, index) => (
					<div className="movie-item" key={index}><Link to={"/movies/" + movieName}>{movieName}</Link></div>
				))}
				</div>

				<div className="m-movies-content">
					{this.props.children}
				</div>
			</div>		
		);
	}
}

export default {
	path: "movies",
	component: Movies,

	getChildRoutes(location, callback){
		require.ensure([], (require) => {
			callback(null, [
				MovieItem
			]);
		});
	}
};
