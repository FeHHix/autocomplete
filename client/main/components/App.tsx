import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'

import {
  Header,
  Menu,
  model,
  fetchItems
} from '../../typeahead'

interface AppProps {
	isFetching: boolean;
	items: model.ProfileCard[];
	dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
	render() {
		const { dispatch, items } = this.props;

		console.log(this.props);

		let rows = [];

		items.map(function(hint, index) {
			rows.push(<div key={index} className="item">Подсказка: {hint.description}</div>);
		});
		
		return(
			<div className="typeaheadapp">
				<Header getHints={(text: string) => dispatch(fetchItems({value:text, dispatch}))} />
				<Menu items={items} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: state.data.isFetching,
	items: state.data.items
});

export default connect(mapStateToProps)(App); //it connects an application to store

