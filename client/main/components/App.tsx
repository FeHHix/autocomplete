import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'

import {
  Header,
  Menu,
  model,
  fetchHints,
  selectHint
} from '../../typeahead'

interface AppProps {
	isFetching: boolean;
	hint: model.ProfileCard;
	hints: model.ProfileCard[];
	dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
	render() {
		console.log('App render');

		const { isFetching, dispatch, hints, hint } = this.props;
		const selectValue = hint ? hint.realName : '';

		let rows = [];

		hints.map(function(hint) {
			rows.push(<div key={hint.id} className="hint">Подсказка: {hint.description}</div>);
		});
		
		return(
			<div className="typeaheadapp">
				<Header value={selectValue} getHints={(text: string) => dispatch(fetchHints({value:text, dispatch}))} />
				<Menu hints={hints} onClickHint={(hint: model.ProfileCard) => dispatch(selectHint(hint))} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: state.data.isFetching,
	hint: state.data.selectHint,
	hints: state.data.hints
});

export default connect(mapStateToProps)(App); //it connects an application to store

