import { createAction, Action } from 'redux-actions'

import { Promise } from 'es6-promise'

import STUB_API from './api'

import {
	ReceiveItems, 
	RequestItem, 
	ProfileCard 
} from './model'

import { 
	SELECT_HINT,
	REQUEST_HINTS,
	RECEIVE_HINTS
} from './constants/ActionTypes'

const selectHint = createAction<string, string>(
	SELECT_HINT,
	(value: string) => (value)
)

const requestHints = createAction<RequestItem, string>(
	REQUEST_HINTS,
	(text: string) => ({value: text})
)

const receiveHints = createAction<ReceiveItems, ProfileCard[]>(
	RECEIVE_HINTS,
	(hints: ProfileCard[]) => ({hints: hints})
)

const fetchHints = (value: string) => {
	const p: Promise<ProfileCard[]> = new Promise(
		(resolve: (hints: ProfileCard[]) => void, reject: (str: string) => void) => {
			resolve(STUB_API.get(value));
		}
	);
	
	return p;
}

export { selectHint, fetchHints, requestHints, receiveHints }