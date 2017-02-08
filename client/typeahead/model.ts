export type ProfileCard = {
	id: string;
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
	hints?: ProfileCard[];
	value?: string;
};