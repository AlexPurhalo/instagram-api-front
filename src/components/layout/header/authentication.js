// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// Actions import
import { authWithInstagram, signOut } from '../../../actions/sessions';
import { fetchAccountData } from '../../../actions/users';

// Shows Registration form for user
class Authentication extends Component {
	componentWillMount() {
		const {
			authenticated,
			instagramSessionCode,
			authWithInstagram,
			fetchAccountData
		} = this.props;

		let sessionCode = instagramSessionCode;
		sessionCode && authWithInstagram(sessionCode);
		browserHistory.push('/')
		authenticated && fetchAccountData();
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

		const { authenticated, signOut, user: { avatar } } = this.props
		console.log(this.props.user)
		return (
			<ul className="inline-list">
				<li className="inline-block">
					{ avatar && <img src={avatar} alt="avatar" className="avatar"/> }
					</li>
				<li className="inline-block">
					{
						authenticated
							? <button className='sign-out-btn non-styled-btn' onClick={() => signOut()}>Sign Out</button>
							: <a href={authUrl} className="sign-up-link">Sign Up</a>
					}
				</li>
			</ul>
		)
	}
}

export function mapStateToProps(state) {
	return {
		authenticated: state.sessions.authenticated,
		user: state.sessions.profile
	}
}

export default connect(mapStateToProps, {
	authWithInstagram,
	signOut,
	fetchAccountData
})(Authentication);
