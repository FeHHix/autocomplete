import { createAction, Action } from 'redux-actions';

import { RequestHint } from './model';

import { GET_HINTS } from './constants/ActionTypes';

const getHints = createAction<RequestHint, string>(
	GET_HINTS,
	(text: string) => ({value: text})
);

export { getHints }