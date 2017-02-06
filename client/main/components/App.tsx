import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'

import {
  Header,
  Menu,
  model,
  fetchItems,
  selectItem
} from '../../typeahead'

interface AppProps {
	isFetching: boolean;
	item: model.ProfileCard;
	items: model.ProfileCard[];
	dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
	render() {
		const { dispatch, items, item } = this.props;
		const selectValue = item ? item.realName : '';

		let rows = [];

		items.map(function(item) {
			rows.push(<div key={item.id} className="item">Подсказка: {item.description}</div>);
		});
		
		return(
			<div className="typeaheadapp">
				<Header value={selectValue} getItems={(text: string) => dispatch(fetchItems({value:text, dispatch}))} />
				<Menu items={items} onClickItem={(item: model.ProfileCard) => dispatch(selectItem(item))} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isFetching: state.data.isFetching,
	item: state.data.selectItem,
	items: state.data.items
});

export default connect(mapStateToProps)(App); //it connects an application to store

