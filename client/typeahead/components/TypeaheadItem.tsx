import * as React from 'react'
import { ProfileCard } from '../model'

interface TypeaheadItemProps {
	profileCard: ProfileCard;
	key?: any;
}

class TypeaheadItem extends React.Component<TypeaheadItemProps, void> {
	render() {
		const { profileCard } = this.props;

		return(
			<div className="profilecard">
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