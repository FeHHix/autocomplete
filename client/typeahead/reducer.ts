import { handleActions, Action } from 'redux-actions';

import { 
	ProfileCard,
	RequestItem,
	ReceiveItems,
	SelectItem,
	IState
} from './model';

import {
	SELECT_ITEM,
	REQUEST_ITEMS,
	RECEIVE_ITEMS
} from './constants/ActionTypes';

const initialState: IState = {
	isFetching: false,
	items: [{
		realName: '',
		screenName: '',
		description: ''
	}]
};

//it uses handleActions instead function with switch block
export default handleActions<IState, any>({
	[REQUEST_ITEMS] : (state: IState, action: Action<RequestItem>) : IState => {
		console.log('REQUEST_ITEMS. Fetching is starting as ' + action.payload.value);

		return {
			...state,
			isFetching: true,
			items: []
		};
	},
	[RECEIVE_ITEMS]: (state: IState, action: Action<ReceiveItems>) : IState => {
		console.log('RECEIVE_ITEMS. Fetching completed');

		console.log(action.payload.items);

		return {
			...state, 
			isFetching: false,
			items: action.payload.items
		};
	},
	[SELECT_ITEM]: (state: IState, action: Action<SelectItem>) : IState => {
		console.log('SELECT_ITEM. Selected item ' + action.payload.id);

		return {
			...state,
			selectItem: {...state, id: action.payload.id}
		}
	}
}, initialState);