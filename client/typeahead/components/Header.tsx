import * as React from 'react';

import TypeaheadTextInput from './TypeaheadTextInput';

interface HeaderProps {
	getHints: (text:string) => any;
};

class Header extends React.Component<HeaderProps, void> {
	handleSearch(text) {
		this.props.getHints(text);
	}

	render() {
		return(
			<div className="header">
				<TypeaheadTextInput 
					onTypeahead={this.handleSearch.bind(this)}
					placeholder="Search Twitter users..." />
			</div>
		)
	}
}