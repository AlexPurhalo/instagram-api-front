// Node modules
import axios from 'axios'

// Actions import
import { AUTHENTICATE_SUCCESS } from '../constants/sessions';

// Environment variables
const apiUrl = process.env.API_URL;

// For headers
const headers = {
	headers: {
		'X-Instagram-Access-Token': localStorage.getItem('X-Instagram-Access-Token'),
		'X-User-Id': localStorage.getItem('X-User-Id') }
};

// Fetches account's data
const fetchAccountData = () => (dispatch) => {
	return axios.get(`${apiUrl}/me`, headers)
		.then(res => dispatch({ type: AUTHENTICATE_SUCCESS, payload: res.data }))
		.catch(req => console.log(req.response.data))
}


export { fetchAccountData }
