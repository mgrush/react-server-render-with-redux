import React		from "react";
import BookItem		from "../bookItem";
import { Link }		from "react-router";
import { connect }	from "react-redux";

typeof window != "undefined" && require("./index.less");

if (typeof require.ensure !== 'function'){
	require.ensure = (d, c) => c(require);
}

@connect(state => ({ booksList : state.booksList }))
class Books extends React.Component {
	render(){
		return (
			<div className="m-books">
				<div className="m-books-sidebar">
				{this.props.booksList.map((bookName, index) => (
					<div className="book-item" key={index}><Link to={"/books/" + bookName}>{bookName}</Link></div>
				))}
				</div>
				<div className="m-books-content">
					{this.props.children}
				</div>
			</div>		
		);
	}
}

export default {
	path : "books",
	component : Books,

	getChildRoutes(location, callback){
		require.ensure([], (require) => {
			callback(null, [
				BookItem
			]);
		});
	}
}
