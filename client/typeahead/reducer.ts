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
	hints: []
};

/*It uses handleActions instead function with switch block. Is passed instead of map*/
export default handleActions<IState, any>({
	[REQUEST_HINTS] : (state: IState, action: Action<RequestItem>) : IState => {
		console.log(REQUEST_HINTS);

		return {
			...state,
			isFetching: true,
			value: action.payload.value,
			hints: []
		};
	},
	[RECEIVE_HINTS]: (state: IState, action: Action<ReceiveItems>) : IState => {
		console.log(RECEIVE_HINTS);

		return {
			...state, 
			isFetching: false,
			hints: action.payload.hints
		};
	},
	[SELECT_HINT]: (state: IState, action: Action<string>) : IState => {
		console.log(SELECT_HINT);

		return {
			...state,
			value: action.payload,
			hints: []
		}
	}
}, initialState);