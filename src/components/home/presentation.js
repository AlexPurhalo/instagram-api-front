// Node modules import
import React, { Component } from 'react';

// Images import
import InstagramIcon from '../../../images/instagram_icon.png';
// PresentationPage
export default class PresentationPage extends Component {
	render() {
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
			<div className="presentation-page">
				<div className="presentation">
					<h1>Welcome to Refy</h1>
					<p>We gonna help you to build your own internet shop</p>
					<a href={authUrl}>
						<div className="start-link">Click to start work</div>
						<img src={InstagramIcon} alt="instagram icon" />
					</a>
				</div>
			</div>
		);
	}
}
