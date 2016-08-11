import React from "react";

if( process.env.BROWSER ){
	require("./index.less");
}

if (typeof require.ensure !== 'function'){
	require.ensure = (d, c) => c(require);
}

class MovieItem extends React.Component {
	render(){
		return (
			<div className="m-movie-content">
				你想看电影《{this.props.params.movieName}》？
			</div>		
		);
	}
}

export default {
	path : ":movieName",
	component : MovieItem
};
