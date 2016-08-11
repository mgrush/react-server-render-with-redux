import "babel-polyfill";

import React				from "react";
import ReactDOM				from "react-dom";
import routes				from "../routes";

import { fromJS }							from "immutable";
import { Provider }							from "react-redux";
import { createStore, combineReducers }		from "redux";
import { match, Router, browserHistory }	from "react-router";
import * as Reducers						from "../components/Reducers";

const { pathname, search, hash }	= window.location;

const location	= pathname + search + hash;
const initState	= window.__INITIAL_STATE__;

Object.keys(initState).map((key) => {
	initState[key]	= fromJS( initState[key] );
});

const store		= createStore( combineReducers(Reducers), initState );

match({ routes, location }, () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router children={routes} history={browserHistory} />
		</Provider>,
		document.getElementById("root")
	);
});
