export const INITIAL_STATE = {
	items: null
};

import { FETCH_ITEMS_SUCCESS } from '../constants/items';

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_ITEMS_SUCCESS:
			return { ...state, items: action.payload.items };
		default:
			return state
	}
}
