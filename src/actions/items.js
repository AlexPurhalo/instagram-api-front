// Node modules
import axios from 'axios'

// Action types import

// Environment variables
const apiUrl = process.env.API_URL;

const headers = {
	headers: {
		'X-Instagram-Access-Token': localStorage.getItem('X-Instagram-Access-Token'),
		'X-User-Id': localStorage.getItem('X-User-Id') }
};

// Fetches user's items
const fetchUserItems = () =>
	axios.get(`${apiUrl}/items`, headers)
		.then(res => console.log(res.data));

export { fetchUserItems }
