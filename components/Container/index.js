import React				from "react";
import { connect }			from "react-redux";

typeof window != "undefined" && require("./index.less");

@connect(state => ({ booksList	: state.booksList, moviesList	: state.moviesList }))

export default class Container extends React.Component {
	render(){
		return (
			<div className="m-container">
				<div className="nav">欢迎来到图书阅览室 & 影厅</div>
				<ul className="aside">
					<li key="books" className="active">图书列表</li>,
					<li key="movies">影视世界</li>
				</ul>
				<div className="article">
				</div>
			</div>		
		);
	}
}
