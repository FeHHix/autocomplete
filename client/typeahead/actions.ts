import { CALL_API } from 'redux-api-middleware'

import { createAction, Action } from 'redux-actions'

import { Dispatch } from 'redux'

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

interface Fetch {
	value: string;
	dispatch: Dispatch<{}>;
}

const selectHint = createAction<ProfileCard, ProfileCard>(
	SELECT_HINT,
	(item: ProfileCard) => (item)
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