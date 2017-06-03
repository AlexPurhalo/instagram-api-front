// Node modules
import axios from 'axios'

// Action types import
import { FETCH_PHOTOS_SUCCESS, HIDE_PHOTO } from '../constants/photos';

// Environment variables
const apiUrl = process.env.API_URL;

const headers = {
	headers: {
		'X-Instagram-Access-Token': localStorage.getItem('X-Instagram-Access-Token'),
		'X-User-Id': localStorage.getItem('X-User-Id') }
};

// Fetches user's photos
const fetchUserPhotos = () => {
	const successed = (data) => {
		return { type: FETCH_PHOTOS_SUCCESS, payload: data }
	}

	return (dispatch) =>
		axios.get(`${apiUrl}/photos`, headers)
			.then(res => dispatch(successed(res.data)))
}

const hidePhoto = (photo) => {
	return { type: HIDE_PHOTO, payload: photo }
}

export { fetchUserPhotos, hidePhoto }
