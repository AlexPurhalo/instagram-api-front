// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import sessionsReducer from './sessions';
import usersReducer from './users';

// State holding in combine reducers
const rootReducer = combineReducers({
	sessions: sessionsReducer,
	users: usersReducer
});

export default rootReducer;
