import { createAction, Action } from 'redux-actions'

import { RequestHint, IState } from './model'

import { Dispatch } from 'redux'

import { 
	GET_HINTS,
	REQUEST_ITEMS,
	RECEIVE_ITEMS,
	FETCH_ITEMS
} from './constants/ActionTypes'

const getHints = createAction<RequestHint, string>(
	GET_HINTS,
	(text: string) => ({value: text})
)

const requestItems = createAction<string, string>(
	REQUEST_ITEMS,
	(text: string) => "FETHCING START"
)

const receiveItems = createAction<IState, any>(
	RECEIVE_ITEMS,
	(items: IState) => (items)
)

const fetchItems = createAction<any, string>(
	FETCH_ITEMS,
	(text: string, dispatch: Dispatch<{}>) => {
		dispatch(requestItems(text));
		return dispatch(receiveItems({}));
	}
}

export { getHints }