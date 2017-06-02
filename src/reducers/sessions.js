export const INITIAL_STATE = {
	authenticated: false,
	profile: {
		id: null,
		avatar: null,
		username: null
	}
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
			return {
				...state,
				authenticated: false,
				profile: { id: null, username: null, avatar: null }
			};
		case AUTHENTICATE_SUCCESS:
			const { inst_avatar, id, username } = action.payload

			return {
				...state,
				authenticated: true,
				profile: {
					id,
					username,
					avatar: inst_avatar
				}
			};
		case AUTHENTICATE_FAILURE:
			return { ...state, authenticated: false };
		case AUTO_SIGN_IN:
			return { ...state, authenticated: true };
		default:
			return state
	}
}
