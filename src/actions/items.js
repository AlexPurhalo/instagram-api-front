// Node modules
import axios from 'axios'

// Action types import
import { CREATE_ITEM_SUCCESS } from '../constants/photos'
import { FETCH_ITEMS_SUCCESS } from '../constants/items'

// Environment variables
const apiUrl = process.env.API_URL;

const headers = {
	headers: {
		'X-Instagram-Access-Token': localStorage.getItem('X-Instagram-Access-Token'),
		'X-User-Id': localStorage.getItem('X-User-Id') }
};

// Fetches user's items
const fetchUserItems = () =>
	(dispatch) => axios.get(`${apiUrl}/items`, headers)
		.then(res => dispatch({
			type: FETCH_ITEMS_SUCCESS, payload: { items: res.data }
		}));

// Creates a new item
const createItem = (itemInfo) => {
	const successed = (items) => {
		return {
			type: CREATE_ITEM_SUCCESS,
			payload: items
		}
	};

	return (dispatch) => axios.post(`${apiUrl}/items`, itemInfo, headers)
		.then(res => dispatch(successed(res.data)))
};

export { fetchUserItems, createItem }
