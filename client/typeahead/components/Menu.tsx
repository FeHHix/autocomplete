import * as React from 'react'
import { ProfileCard } from '../model'
import TypeaheadItem from './TypeaheadItem'

interface MenuProps {
	onClickItem: (id: number) => void;
	selectedItem?: ProfileCard;
	items: ProfileCard[];
}

class Menu extends React.Component<MenuProps, void> {
	handleSelectItem(id: number) {
		this.props.onClickItem(id);
	}

	render() {
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