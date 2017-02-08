import * as React from 'react';

import TypeaheadTextInput from './TypeaheadTextInput';

interface HeaderProps {
	value?: string;
	getHints: (text: string) => any;
	getIsFocused: (isFocused: boolean) => void
};

class Header extends React.Component<HeaderProps, void> {
	handleSearch(text: string) {
		this.props.getHints(text);
	}

	handleFocus(isFocused: boolean) {
		this.props.getIsFocused(isFocused);
	}

	render() {
		return(
			<TypeaheadTextInput 
				value={this.props.value}
				onTypeahead={this.handleSearch.bind(this)}
				onFocus={this.handleFocus.bind(this)}
				placeholder="Search Twitter users..." />
		)
	}
}

export default Header;