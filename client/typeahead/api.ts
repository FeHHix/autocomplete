import { ProfileCard } from './model'
import { forEach, includes } from 'lodash'

const items: ProfileCard[] = [
	{	
		id: 1,
		realName: 'Iago Load Generator',
		screenName: '@iagoloadgen',
		description: 'A load generator, built for engineers'
	},
	{
		id: 2,
		realName: 'G',
		screenName: '@iagoloadgen',
		description: '1/2 of @JackAndJack AWL Music Video out now: https://t.co/sJxi73D29J'
	},
	{
		id: 3,
		realName: 'Michael Van Gerwen',
		screenName: '@MvG180',
		description: 'World Number 1 Darts player. Two-time World Champion. Sponsored by @leylandpaints @keukenconcurren @DLM_lease @XQmaxDarts Managed by @modusdarts180 & @zwasports'
	},
	{
		id: 4,
		realName: 'G',
		screenName: '@grantlandis',
		description: '17. Singer/Songwriter. snapchat: grantmdlandis MGMT:info@hypeprojects.com check out my new song why you gotta be you on soundcloud please❤️ link is down there⬇️'
	},
	{
		id: 5,
		realName: 'Greg Leding',
		screenName: '@g',
		description: 'Beer. Design. Food. Politics. Sports. Travel. The man who accompanies @eironside to places.'
	}
]

const api = {
	getItems: (filter: string) => {
		const value = filter.trim();

		let matches = [];

		forEach(items, (item) => {
			if (includes(item.realName, value)) {
				matches.push(item);
			}
		});

		return matches;
	}
}

export default api