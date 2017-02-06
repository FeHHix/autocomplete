import * as React from 'react'
import { ProfileCard } from '../model'
import TypeaheadItem from './TypeaheadItem'

interface MenuProps {
	onClickItem: (item: ProfileCard) => void;
	items: ProfileCard[];
}

class Menu extends React.Component<MenuProps, void> {
	handleSelectItem(item: ProfileCard) {
		this.props.onClickItem(item);
	}

	render() {
		console.log('Menu render');
		
		const { items } = this.props;

		return(
			<div className="typeahead-menu">
				<div className="dataset">
					{
						items.map((item, index) => <TypeaheadItem key={index} profileCard={item} onClick={this.handleSelectItem.bind(this)} />)
					}
				</div>
			</div>
		);
	}
}

export default Menu