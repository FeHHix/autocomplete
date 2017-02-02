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
		const { dispatch } = this.props;
		
		return(
			<div className="typeaheadapp">
				<Header getHints={(text: string) => dispatch(getHints(text))} />
			</div>
		);
	}
}

