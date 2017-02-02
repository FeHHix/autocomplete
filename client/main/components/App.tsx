import { Dispatch } from 'redux'; //it calls action to update state of app
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Header,
  model,
  getHints
} from '../../typeahead';

interface AppProps {
	hints: model.ProfileCard[],
	dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
	render() {
		const { dispatch, hints } = this.props;

		let rows = [];

		hints.map(function(hint, index) {
			rows.push(<div key={index} className="hint">Подсказка: {hint.description}</div>);
		});

		console.log(rows);
		
		return(
			<div className="typeaheadapp">
				<Header getHints={(text: string) => dispatch(getHints(text))} />
				{rows}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	hints: state.hints
});

export default connect(mapStateToProps)(App);

