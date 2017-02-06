import * as React from 'react';

import TypeaheadTextInput from './TypeaheadTextInput';

interface HeaderProps {
	value?: string;
	getHints: (text: string) => any;
};

class Header extends React.Component<HeaderProps, void> {
	handleSearch(text: string) {
		this.props.getHints(text);
	}

	render() {
		console.log('Header render');
		
		return(
			<TypeaheadTextInput 
				value={this.props.value}
				onTypeahead={this.handleSearch.bind(this)}
				placeholder="Search Twitter users..." />
		)
	}
}

export default Header;