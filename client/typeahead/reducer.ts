import { handleActions, Action } from 'redux-actions';

import { 
	ProfileCard, 
	RequestHint, 
	IState
} from './model';

import {
	GET_HINTS
} from './constants/ActionTypes';

const initialState: IState = [<ProfileCard>{
	realName: '',
	screenName: '',
	description: '',
}];

export default handleActions<IState, RequestHint>({
	[GET_HINTS]: (state: IState, action: Action<RequestHint>) : IState => {
		console.log('reduce... ' + action.type);
		return [{
			realName: 'hint ' + action.payload.value,
			screenName: 'hint ' + action.payload.value,
			description: 'hint ' + action.payload.value
		}, ...state];
	}
}, initialState);