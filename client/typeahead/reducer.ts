import { handleActions, Action } from 'redux-actions';

import { 
	ProfileCard,
	RequestItem,
	ReceiveItems,
	IState
} from './model';

import {
	SELECT_HINT,
	REQUEST_HINTS,
	RECEIVE_HINTS
} from './constants/ActionTypes';

const initialState: IState = {
	isFetching: false,
	selectHint: null,
	hints: []
};

//it uses handleActions instead function with switch block
export default handleActions<IState, any>({
	[REQUEST_HINTS] : (state: IState, action: Action<RequestItem>) : IState => {
		console.log('REQUEST_ITEMS. Fetching is starting as ' + action.payload.value);

		return {
			...state,
			isFetching: true,
			selectHint: null,
			hints: []
		};
	},
	[RECEIVE_HINTS]: (state: IState, action: Action<ReceiveItems>) : IState => {
		console.log('RECEIVE_ITEMS. Fetching completed');

		console.log(action.payload.hints);

		return {
			...state, 
			isFetching: false,
			hints: action.payload.hints
		};
	},
	[SELECT_HINT]: (state: IState, action: Action<ProfileCard>) : IState => {
		console.log('SELECT_ITEM. Selected item ' + action.payload.realName);

		return {
			...state,
			selectHint: action.payload
		}
	}
}, initialState);