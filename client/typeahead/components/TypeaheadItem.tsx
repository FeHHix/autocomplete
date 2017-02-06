import * as React from 'react'
import { ProfileCard } from '../model'

interface TypeaheadItemProps {
	onClick: (id: number) => void;
	profileCard: ProfileCard;
	key?: any;
}

class TypeaheadItem extends React.Component<TypeaheadItemProps, void> {
	handleClick() {
		this.props.onClick(this.props.profileCard.id);
	}

	render() {
		const { profileCard } = this.props;

		return(
			<div className="profilecard" onClick={this.handleClick.bind(this)} >
				<div className="profilecard-details">
					<div className="profilecard-realName">{profileCard.realName}</div>
					<div className="profilecard-screenName">{profileCard.screenName}</div>
					<div className="profilecard-description">{profileCard.description}</div>
				</div>
			</div>
		);
	}
}

export default TypeaheadItem