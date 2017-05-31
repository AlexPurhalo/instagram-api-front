// Node modules
import axios from 'axios'

// Action types
import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE, SIGN_OUT } from '../constants/sessions'

// Environment variables
const apiUrl = process.env.API_URL;

// Authentication with Instagram
const authWithInstagram = (sessionCode) => {
	const authWithInstagramSuccess = (authInfo) => {
		console.log(authInfo)
		localStorage.setItem('jwt', authInfo['token']);
		localStorage.setItem('userId', authInfo['token'].split(':')[0]);
		localStorage.setItem('instToken', authInfo['inst_token'])

		return { type: AUTHENTICATE_SUCCESS }
	};

	const authWithInstagramFailure = () => ({
		type: AUTHENTICATE_FAILURE
	});

	return (dispatch) => axios.get(`${apiUrl}/auth/instagram/callback?code=${sessionCode}`)
		.then(res => dispatch(authWithInstagramSuccess(res.data)))
		.catch(req => dispatch(authWithInstagramFailure(req.response.data)));
};

// Localstorage cleaning and authenticated state changing
const signOut = () => {
	localStorage.removeItem('userId');
	localStorage.removeItem('jwt');
	localStorage.removeItem('instT	oken');

	return { type: SIGN_OUT }
};

export { authWithInstagram, signOut }
