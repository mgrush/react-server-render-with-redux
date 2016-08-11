import koa					from "koa";
import koaRouter			from "koa-router";
import webpack				from "webpack";
import webpackConfig		from "./webpack/webpack.config.js";
import webpackDevMiddleware	from "koa-webpack-dev-middleware";
import webpackHotMiddleware	from "koa-webpack-hot-middleware";

import React				from "react";
import ReactServer			from "react-dom/server";

import Util					from "./components/Util";
import * as Reducers		from "./components/Reducers";
import routes				from "./routes";

import { createStore, combineReducers }	from "redux";
import { Provider }						from "react-redux";
import { RouterContext, match }			from "react-router";
import { renderToString }				from "react-dom/server";

const app	= new koa();

if( process.env.NODE_ENV != "production" ){
	let compiler		= webpack( webpackConfig );

	app.use(webpackDevMiddleware( compiler, {
		noInfo			: true,
		publicPath		: webpackConfig.output.publicPath
	}));

	app.use(webpackHotMiddleware( compiler ));
}

let router	= new koaRouter();

router.all("/showUser", function *(){
	this.body	= "Hello World!";
});

app.use(router.routes()).use(router.allowedMethods());

app.use(function *(next){
	const store			= createStore( combineReducers( Reducers ), {
		booksList	: ["呼啸山庄", "百年孤独", "一千零一夜", "雾都孤儿"],
		moviesList	: ["海上钢琴师", "野性的呼唤", "孤狼", "绝对零度"]
	});

	const initState		= store.getState();

	match({ routes, location : this.req.url }, (err, redirectLocation, renderProps) => {
		if( err ){
			this.body	= "Interval Server Error !";
		}else if( renderProps ){
			this.body	= Util.renderHtml({
				initState	: initState,
				title		: "React Server Rendering",
				content		: renderToString(
					<Provider store={store}>
						<RouterContext {...renderProps}/>
					</Provider>
				)
			});
		}else {
			this.body	= "Page Not Found !";
		}
	});
});

app.listen(3000);
