import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'

import {
  Header,
  Menu,
  model,
  fetchHints,
  requestHints,
  receiveHints,
  selectHint
} from '../../typeahead'

interface AppProps {
	isFetching: boolean;
	hint: model.ProfileCard;
	hints: model.ProfileCard[];
	dispatch: Dispatch<{}>;
	getHints(value: string):void;
	selectHint(hint: model.ProfileCard):void;
}

interface AppState {
	isFocused: boolean;
}

class App extends React.Component<AppProps, AppState> {
	constructor(props, context) {
		super(props, context);

		this.state = {
			isFocused: false
		}
	}

	shouldCloseMenu(isFocused: boolean) {
		this.setState({isFocused: isFocused});
	}

	render() {
		console.log('App render');

		const { isFetching, getHints, selectHint, hints, hint } = this.props;
		const { isFocused } = this.state;

		const selectValue = hint ? hint.realName : '';

		let menu;

		if (isFocused)
			menu = <Menu hints={hints} onClickHint={(hint: model.ProfileCard) => {selectHint(hint)}} />;
		
		return(
			<div className="Typeahead Typeahead--twitterUsers">
				<Header value={selectValue} getHints={(text: string) => {getHints(text)}} getIsFocused={this.shouldCloseMenu.bind(this)} />
				{menu}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: state.data.isFetching,
	hint: state.data.selectHint,
	hints: state.data.hints
});

const mapDispatchToProps = dispatch => ({
	getHints: (value: string) => {
		dispatch(requestHints(value));

		fetchHints(value).then((hints: model.ProfileCard[]) => {
			dispatch(receiveHints(hints));
		});
	},
	selectHint: (hint: model.ProfileCard) => {
		dispatch(selectHint(hint));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //it connects an application to store

