import { createAction, Action } from 'redux-actions'

import { Dispatch } from 'redux'

import fetch from 'isomorphic-fetch'

import superAgent from 'superagent'

import { RequestHint, ProfileCard } from './model'

import { 
	GET_HINTS,
	REQUEST_ITEMS,
	RECEIVE_ITEMS,
	FETCH_ITEMS
} from './constants/ActionTypes'

interface ApiAsync {
	value: any;
	dispatch: Dispatch<{}>;
}

const getHints = createAction<RequestHint, string>(
	GET_HINTS,
	(text: string) => ({value: text})
)

const requestItems = createAction<string, string>(
	REQUEST_ITEMS,
	(text: string) => ("REQUEST ITEMS WITH " + text)
)

const receiveItems = createAction<ProfileCard[], string>(
	RECEIVE_ITEMS,
	(json: string) => ([])
)

const fetchItems = createAction<string, ApiAsync>(
	FETCH_ITEMS,
	(api: ApiAsync) => {
		api.dispatch(requestItems(api.value));

		// return fetch('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + api.value)
	 //    	.then(response => response.json())
	 //    	.then(json => api.dispatch(receiveItems(JSON.stringify(json)))
	 //    );

		return superAgent
			.get('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + api.value)
			.set('Accept', 'application/json')
			.end(function(err, res) {
				api.dispatch(receiveItems(JSON.stringify(res)));
			});
	}
)

export { getHints, fetchItems }