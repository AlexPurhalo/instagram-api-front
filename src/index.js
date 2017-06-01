// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// Components import via routing
import routes from './routes';

// Styles import
import '../styles/index.scss'

// Action types import
import { AUTO_SIGN_IN } from './constants/sessions';

// Reducers import
import reducers from './reducers/index';

// Store definition with Middleware applying and Rendering of React Document Object Model (DOM)
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore),
	reducer_store = createStoreWithMiddleware(reducers), token = localStorage.getItem('X-Access-Token');

// if token exist changes authenticated flag
token && reducer_store.dispatch({ type: AUTO_SIGN_IN });

ReactDOM.render(
	<Provider store={reducer_store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.querySelector('#react-application')
);
