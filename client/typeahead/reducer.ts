import { handleActions, Action } from 'redux-actions';

import { 
	ProfileCard, 
	RequestHint, 
	IState
} from './model';

import {
	GET_HINTS
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
export default handleActions<IState, RequestHint>({
	[GET_HINTS]: (state: IState, action: Action<RequestHint>) : IState => {
		return {
			isFetching: true, 
			items:[{
			realName: 'hint ' + action.payload.value,
			screenName: 'hint ' + action.payload.value,
			description: 'hint ' + action.payload.value
		}], ...state};
	}
}, initialState);