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
	showResult?: boolean;
	entryValue?: string;
}

class App extends React.Component<AppProps, AppState> {
	constructor(props, context) {
		super(props, context);

		this.state = {
			isFocused: false,
			showResult: false
		}
	}

	shouldCloseMenu(isFocused: boolean) {
		if (isFocused)
			this.setState({isFocused: isFocused, showResult: true});
		else
			this.setState({isFocused: !isFocused});
	}

	hintSelected(hint: model.ProfileCard) {
		this.setState({entryValue: hint.realName, isFocused: false, showResult: false});
	}

	render() {
		console.log('App render');

		const { isFetching, getHints, selectHint, hints, hint } = this.props;
		const { isFocused, showResult, entryValue } = this.state;

		let menu;

		if (showResult)
			menu = <Menu hints={hints} onClickHint={this.hintSelected.bind(this)} />;
		
		return(
			<div className="Typeahead Typeahead--twitterUsers">
				<Header value={entryValue} getHints={(text: string) => {getHints(text)}} getIsFocused={this.shouldCloseMenu.bind(this)} />
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

