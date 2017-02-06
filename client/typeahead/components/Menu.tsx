import * as React from 'react'
import { ProfileCard } from '../model'
import TypeaheadItem from './TypeaheadItem'

interface MenuProps {
	onClickHint: (hint: ProfileCard) => void;
	hints: ProfileCard[];
}

interface MenuState {
	isOpen: boolean;
}

class Menu extends React.Component<MenuProps, MenuState> {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isOpen: false
		}
	}

	handleSelectHint(hint: ProfileCard) {
		this.props.onClickHint(hint);
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps')
		this.setState({isOpen: nextProps.hints.length > 0});
	}

	render() {
		console.log('Menu render');
		const { hints } = this.props;
		const isOpenClass = this.state.isOpen ? 'Typeahead-menu is-open' : 'Typeahead-menu';

		return(
			<div className={isOpenClass}>
				<div className="tt-dataset tt-dataset-0">
					{
						hints.map((hint, index) => <TypeaheadItem key={index} profileCard={hint} onClick={this.handleSelectHint.bind(this)} />)
					}
				</div>
			</div>
		);
	}
}

export default Menu