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

		return (
			<ul className="inline-list">
				<li className="inline-block">
					{
						this.props.authenticated
							? <button className='sign-out-btn non-styled-btn' onClick={() => this.props.signOut()}>Sign Out</button>
							: <a href={authUrl} className="sign-up-link">Sign Up</a>
					}
				</li>
			</ul>
		)
	}
}

export function mapStateToProps(state) {
	return {
		authenticated: state.sessions.authenticated
	}
}

export default connect(mapStateToProps, { authWithInstagram, signOut })(Authentication);
