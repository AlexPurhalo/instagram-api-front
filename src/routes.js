// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import HomePage from './containers/home'

// Routes definition
export default (
	<Route path="/" component={App} >
		<IndexRoute component={HomePage} />
	</Route>
);
