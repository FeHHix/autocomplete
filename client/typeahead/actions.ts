import { CALL_API } from 'redux-api-middleware'

import { createAction, Action } from 'redux-actions'

import { Dispatch } from 'redux'

import { Promise } from 'es6-promise'

// import fetch from 'isomorphic-fetch'

// import request from 'superagent'

import api from './api'

import {
	ReceiveItems, 
	RequestItem, 
	ProfileCard 
} from './model'

import { 
	SELECT_HINT,
	REQUEST_HINTS_SUCCESS,
	REQUEST_HINTS_FAILURE,
	RECEIVE_HINTS,
	FETCH_HINTS
} from './constants/ActionTypes'

interface Fetch {
	value: string;
	dispatch: Dispatch<{}>;
}

const selectHint = createAction<ProfileCard, ProfileCard>(
	SELECT_HINT,
	(item: ProfileCard) => (item)
)

const requestHintsSuccess = createAction<RequestItem, string>(
	REQUEST_HINTS_SUCCESS,
	(text: string) => ({value: text})
)

const requestHintsFailure = createAction<RequestItem, string>(
	REQUEST_HINTS_FAILURE,
	(text: string) => ({value: text})
)

const receiveHints = createAction<ReceiveItems, ProfileCard[]>(
	RECEIVE_HINTS,
	(hints: ProfileCard[]) => ({hints: hints})
)

const fetchHints = createAction<Promise<void>, Fetch>(
	FETCH_HINTS,
	(fetch: Fetch) => {
		fetch.dispatch(requestHintsSuccess(fetch.value));

		const p: Promise<String> = new Promise(
			(resolve: (str: string) => void, reject: (str: string) => void) => {
				resolve(JSON.stringify(api.get(fetch.value)));
			}
		);

		return p.then((json: string) => {
			console.log('load items complete');
			fetch.dispatch(receiveHints(JSON.parse(json)));
		});

		// return fetch('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + api.value)
	 //    	.then(response => response.json())
	 //    	.then(json => api.dispatch(receiveItems(JSON.stringify(json)))
	 //    );

	 	// new Promise((resolve, reject) => {

	 	// });

		// return request
		// 	.get('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + api.value)
		// 	.set('Accept', 'application/json')
		// 	.end(function(err, res) {
		// 		api.dispatch(receiveItems(JSON.stringify(res)));
		// 	});

		//return api.dispatch(receiveItems(JSON.stringify(stub)));
	}
)

const API = {
	[CALL_API]: {
		endpoint: 'https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search',
    	method: 'GET',
    	types: [requestHintsSuccess, receiveHints, requestHintsFailure]
	}
}

export { selectHint, fetchHints }