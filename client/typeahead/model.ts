export type ProfileCard = {
	id: number;
	realName: string;
	screenName: string;
	description: string;
};

export type RequestItem = {
	value: string;
}

export type ReceiveItems = {
	hints: ProfileCard[];
}

export type IState = {
	isFetching: boolean;
	selectHint?: ProfileCard;
	hints?: ProfileCard[];
};