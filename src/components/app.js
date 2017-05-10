// Node modules import
import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios'

// Layout component
export default class App extends Component {
	componentWillMount() {
		const query = this.props.location.query,
			apiUrl 		= 'http://localhost:5000', // back-end url
			cbAddress = 'auth/instagram'; // call back address

		query.code && axios.get(`${apiUrl}/${cbAddress}/callback?code=${query.code}`)
			.then(response => console.log(response.data))
			.then(browserHistory.push('/'))
	}

	render () {
		const serviceUrl = 'https://api.instagram.com',
			clientId = 'b2c21614a6854184af420c92673f46e9',
			redirectUri = 'http://localhost:8080/',
			responseType = 'code';

		const authUrl = `
			${serviceUrl}/oauth/authorize/
			?client_id=${clientId}
			&redirect_uri=${redirectUri}
			&response_type=${responseType}
		`;

		return (
			<div className="container">
				<a href={authUrl}>Auth with Instagram</a>
			</div>
		)
	}
}
