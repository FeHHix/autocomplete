import * as React from 'react'
import { ProfileCard } from '../model'
import TypeaheadItem from './TypeaheadItem'

interface MenuProps {
	onClickHint: (hint: ProfileCard) => void;
	hints: ProfileCard[];
}

class Menu extends React.Component<MenuProps, void> {
	handleSelectHint(hint: ProfileCard) {
		this.props.onClickHint(hint);
	}

	render() {
		console.log('Menu render');
		
		const { hints } = this.props;

		return(
			<div className="typeahead-menu">
				<div className="dataset">
					{
						hints.map((hint, index) => <TypeaheadItem key={index} profileCard={hint} onClick={this.handleSelectHint.bind(this)} />)
					}
				</div>
			</div>
		);
	}
}

export default Menu