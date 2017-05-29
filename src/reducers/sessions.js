export const INITIAL_STATE = {
	authenticated: false
};

import {
	AUTHENTICATE_SUCCESS,
	AUTHENTICATE_FAILURE,
	AUTO_SIGN_IN,
	SIGN_OUT
} from '../constants/sessions';

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SIGN_OUT:
			return { ...state, authenticated: false };
		case AUTHENTICATE_SUCCESS:
			return { ...state, authenticated: true };
		case AUTHENTICATE_FAILURE:
			return { ...state, authenticated: false };
		case AUTO_SIGN_IN:
			return { ...state, authenticated: true };
		default:
			return state
	}
}
