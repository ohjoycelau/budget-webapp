/* eslint-disable */

// Required
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// Render Styles
require('./stylesheets/css/main.css');

// Render App
import App from './App';
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
