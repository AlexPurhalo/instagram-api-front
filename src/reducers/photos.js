export const INITIAL_STATE = {
	photos: null, chosenPhotos: []
};

import { FETCH_PHOTOS_SUCCESS, HIDE_PHOTO } from '../constants/photos'
import { CREATE_ITEM_SUCCESS } from '../constants/items'

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CREATE_ITEM_SUCCESS:
			return { ...state, chosenPhotos: [] };
		case FETCH_PHOTOS_SUCCESS:
			return { ...state, photos: action.payload };
		case HIDE_PHOTO:
			let unchangedPhotos = state.photos, receivedPhoto = action.payload;
			unchangedPhotos = unchangedPhotos.filter(currPhoto => currPhoto.id !== receivedPhoto.id);
			return {
				...state,
				photos: unchangedPhotos,
				chosenPhotos: [...state.chosenPhotos, receivedPhoto]
			};
		default:
			return state
	}
}


