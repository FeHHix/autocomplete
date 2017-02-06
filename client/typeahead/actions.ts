import { createAction, Action } from 'redux-actions'

import { Dispatch } from 'redux'

import { Promise } from 'es6-promise'

// import fetch from 'isomorphic-fetch'

// import request from 'superagent'

import api from './api'

import { 
	SelectItem, 
	ReceiveItems, 
	RequestItem, 
	ProfileCard 
} from './model'

import { 
	REQUEST_ITEMS,
	RECEIVE_ITEMS,
	FETCH_ITEMS,
	SELECT_ITEM
} from './constants/ActionTypes'

interface Fetch {
	value: string;
	dispatch: Dispatch<{}>;
}

const selectItem = createAction<SelectItem, string>(
	SELECT_ITEM,
	(id: string) => ({id: id})
)

const requestItems = createAction<RequestItem, string>(
	REQUEST_ITEMS,
	(text: string) => ({value: text})
)

const receiveItems = createAction<ReceiveItems, ProfileCard[]>(
	RECEIVE_ITEMS,
	(items: ProfileCard[]) => ({items: items})
)

const fetchItems = createAction<Promise<void>, Fetch>(
	FETCH_ITEMS,
	(fetch: Fetch) => {
		fetch.dispatch(requestItems(fetch.value));

		const p: Promise<String> = new Promise(
			(resolve: (str: string) => void, reject: (str: string) => void) => {
				resolve(JSON.stringify(api.getItems(fetch.value)));
			}
		);

		return p.then((json: string) => {
			console.log('load items complete');
			fetch.dispatch(receiveItems(JSON.parse(json)));
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

export { fetchItems }