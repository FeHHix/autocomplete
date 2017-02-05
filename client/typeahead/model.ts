export type ProfileCard = {
	realName: string;
	screenName: string;
	description: string;
};

export type RequestItem = {
	value: string;
}

export type ReceiveItems = {
	items: ProfileCard[];
}

export type IState = {
	isFetching: boolean;
	items?: ProfileCard[];
};