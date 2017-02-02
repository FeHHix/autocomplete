import { combineReducers } from 'redux';

import hints from '../typeahead';

console.log(hints);

const rootReducer = combineReducers({
	hints
});

export default rootReducer;