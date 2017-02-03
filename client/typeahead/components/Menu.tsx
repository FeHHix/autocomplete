import * as React from 'react'
import { ProfileCard } from '../model'
import TypeaheadItem from './TypeaheadItem'

interface MenuProps {
	items: ProfileCard[]
}

class Menu extends React.Component<MenuProps, void> {
	render() {
		const { items } = this.props;

		return(
			<div className="typeahead-menu">
				<div className="dataset">
					{
						items.map((item, index) => <TypeaheadItem key={index} profileCard={item} />)
					}
				</div>
			</div>
		);
	}
}

export default Menu