// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import sessionsReducer from './sessions';

// State holding in combine reducers
const rootReducer = combineReducers({
	sessions: sessionsReducer
});

export default rootReducer;
