export type ProfileCard = {
	realName: string;
	screenName: string;
	description: string;
};

export type SelectItem = {
	id: string;
}

export type RequestItem = {
	value: string;
}

export type ReceiveItems = {
	items: ProfileCard[];
}

export type IState = {
	isFetching: boolean;
	selectItem?: SelectItem;
	items?: ProfileCard[];
};