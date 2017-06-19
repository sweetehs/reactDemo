import "./index.less";
import "./less/reset.less";

import React from "react";
import ReactDom from "react-dom";
import "./modules/config/axios.js";

import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import userReducer from './modules/user/reducer.js';
import appReducer from './modules/app/reducer.js';
import App from "./modules/app/app.jsx";


var reducers = combineReducers({
	userReducer,appReducer
})

var store = createStore(reducers,{},applyMiddleware(thunk));

var render = ()=> ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('app'));
render();
