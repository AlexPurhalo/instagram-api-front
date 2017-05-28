// Node modules import
import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios'

// Layout component
export default class App extends Component {
	componentWillMount() {
		const query = this.props.location.query,
			apiUrl 		= process.env.API_URL,
			cbAddress = 'auth/instagram'; // call back address

		query.code && axios.get(`${apiUrl}/${cbAddress}/callback?code=${query.code}`)
			.then(response => console.log(response.data))
			.then(browserHistory.push('/'))
	}

	render () {
		const serviceUrl = 'https://api.instagram.com',
			clientId 			 = process.env.CLIENT_ID,
			redirectUri 	 = process.env.REDIRECT_URI,
			responseType 	 = 'code';

		const authUrl = `
			${serviceUrl}/oauth/authorize/
			?client_id=${clientId}
			&redirect_uri=${redirectUri}/
			&response_type=${responseType}
		`;

		return (
			<div className="container">
				<a href={authUrl}>Auth with Instagram</a>
			</div>
		)
	}
}
