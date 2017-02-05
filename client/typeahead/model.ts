export type RequestHint = {
	value: string;
}

export type ProfileCard = {
	realName: string;
	screenName: string;
	description: string;
};

export type IState = {
	isFetching: boolean;
	items?: ProfileCard[];
};