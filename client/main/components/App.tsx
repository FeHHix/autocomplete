import { Dispatch } from 'redux'; //it calls action to update state of app
import { connect } from 'react-redux';
import * as React from 'react';

import { Header } from '../../typeahead';

interface AppProps {

}

class App extends React.Component<AppProps, void> {
	render() {
		return(
			<div className="typeaheadapp">
				<Header />
			</div>
		);
	}
}

