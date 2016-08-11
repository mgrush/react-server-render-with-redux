"use strict";

import React from "react";
import { Link } from "react-router";

typeof window != "undefined" && require("./index.less");

if (typeof require.ensure !== 'function'){
	require.ensure = (d, c) => c(require);
}

export default class App extends React.Component {
	render(){
		return (
			<div className="m-app">
				<div className="title">欢迎来到我的娱乐世界</div>	
				<div className="sidebar">
					<div className="item">
						<Link to="/books">我的书籍</Link>
					</div>
					<div className="item">
						<Link to="/movies">我的电影</Link>
					</div>
				</div>
				<div className="content-list">
					{this.props.children || (<div className="blank">点击左侧链接查看相应页面</div>)}
				</div>
			</div>
		);
	}
}
