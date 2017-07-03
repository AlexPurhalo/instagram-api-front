// Node modules
import axios from 'axios'

// Action types
import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE, SIGN_OUT } from '../constants/sessions'

// Environment variables
const apiUrl = process.env.API_URL;

// Authentication with Instagram
const authWithInstagram = (sessionCode, redirectUrl) => {
    const successed = (authInfo) => {
        console.log(authInfo)

        localStorage.setItem('X-Access-Token', authInfo['jwt']);
        localStorage.setItem('X-User-Id', authInfo['id']);
        localStorage.setItem('X-Instagram-Access-Token', authInfo['inst_token'])

        return { type: AUTHENTICATE_SUCCESS, payload: authInfo }
    };

    return (dispatch) => axios.get(
        `${apiUrl}/auth/instagram/callback?code=${sessionCode}&redirected=${redirectUrl}`
    ).then(res => { dispatch(successed(res.data)) }).catch(req => console.log(req));
};

// Localstorage cleaning and authenticated state changing
const signOut = () => {
    localStorage.removeItem('X-Access-Token');
    localStorage.removeItem('X-User-Id');
    localStorage.removeItem('X-Instagram-Access-Token');

    return { type: SIGN_OUT }
};

export { authWithInstagram, signOut }
