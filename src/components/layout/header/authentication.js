// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Actions import
import { authWithInstagram, signOut } from '../../../actions/sessions';

// Shows Registration form for user
class Authentication extends Component {
	componentWillMount() {
		let sessionCode = this.props.instagramSessionCode;

		sessionCode && this.props.authWithInstagram(sessionCode);
		browserHistory.push('/')
	}

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

		console.log(this.props.authenticated)
		return (
			<div>
				{
					this.props.authenticated
						? <button onClick={() => this.props.signOut()}>Sign Out</button>
						: <a href={authUrl}>Auth with Instagram</a>
				}
			</div>
		)
	}
}

export function mapStateToProps(state) {
	return {
		authenticated: state.sessions.authenticated
	}
}

export default connect(mapStateToProps, { authWithInstagram, signOut })(Authentication);
