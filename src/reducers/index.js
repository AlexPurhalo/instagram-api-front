// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import sessionsReducer from './sessions';
import usersReducer from './users';
import photosReducer from './photos';
import itemsReducer from './items';

// State holding in combine reducers
const rootReducer = combineReducers({
	sessions: sessionsReducer,
	users: usersReducer,
	photos: photosReducer,
	items: itemsReducer
});

export default rootReducer;
