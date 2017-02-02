import { handleActions, Action } from 'redux-actions';

import { ProfileCard, IState } from './model';

import {
	GET_HINTS
} from './constants/ActionTypes';

const initialState: IState = [<ProfileCard>{}];

export default handleActions<IState, ProfileCard>({
	[GET_HINTS]: (state: IState, action: Action<ProfileCard>) : IState => {
		return [{
			realName: 'real hint',
			screenName: 'screen hint',
			description: 'description hint'
		}, ...state];
	}
}, initialState);