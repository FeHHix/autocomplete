import { createAction, Action } from 'redux-actions';

import { ProfileCard } from './model';

import { GET_HINTS } from './constants/ActionTypes';

const getHints = createAction<ProfileCard, string>(
	GET_HINTS,
	(text: string) => ({realName: text, screenName: text, description: text})
);

export { getHints }