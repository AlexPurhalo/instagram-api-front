export const INITIAL_STATE = {
	me: { avatar: null }
};

import { FETCH_PROFILE_SUCCESS } from '../constants/users';

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_PROFILE_SUCCESS:
			return { ...state, me: { avatar: action.payload.inst_avatar } };
		default:
			return state
	}
}
