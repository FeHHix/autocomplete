import * as React from 'react'
import { ProfileCard } from '../model'

interface TypeaheadItemProps {
	onClick: (hint: ProfileCard) => void;
	profileCard: ProfileCard;
	key?: any;
}

interface TypeaheadItemState {
	profileCard: ProfileCard;
}

class TypeaheadItem extends React.Component<TypeaheadItemProps, TypeaheadItemState> {
	constructor(props, context) {
		super(props, context);

		this.state = {
			profileCard: this.props.profileCard;
		}
	}

	handleClick() {
		this.props.onClick(this.state.profileCard);
	}

	render() {
		const { profileCard } = this.props;

		return(
			<div className="ProfileCard u-cf Typeahead-suggestion Typeahead-selectable" onClick={this.handleClick.bind(this)} >
				<div className="ProfileCard-details">
					<div className="ProfileCard-realName">{profileCard.realName}</div>
					<div className="ProfileCard-screenName">{profileCard.screenName}</div>
					<div className="ProfileCard-description">{profileCard.description}</div>
				</div>
			</div>
		);
	}
}

export default TypeaheadItem