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
	RECEIVE_HINTS,
	FETCH_HINTS,
	FETCH_HINTS_SUCCESS,
	FETCH_HINTS_FAILURE
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

const fetchHints = createAction<Promise<void>, Fetch>(
	FETCH_HINTS,
	(fetch: Fetch) => {
		fetch.dispatch(requestHints(fetch.value));
		
		const p: Promise<String> = new Promise(
			(resolve: (str: string) => void, reject: (str: string) => void) => {
				resolve(JSON.stringify(STUB_API.get(fetch.value)));
			}
		);
		//https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=
		return p.then((json: string) => {
			console.log('load items complete');
			fetch.dispatch(receiveHints(JSON.parse(json)));
		});
	}
)

// const fetchHints = (text: string) => {
// 	console.log('fetchHints');
// 	return {[CALL_API]: {
// 		endpoint: 'https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + text,
//     	method: 'POST',
//     	types: [receiveHints, FETCH_HINTS_SUCCESS, FETCH_HINTS_FAILURE]
// 	}}
// }

export { selectHint, fetchHints }