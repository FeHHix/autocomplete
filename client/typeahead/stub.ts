import { ProfileCard } from './model'
import { forEach } from 'lodash'

const items: ProfileCard[] = [
	{
		realName: 'Iago Load Generator',
		screenName: '@iagoloadgen',
		description: 'A load generator, built for engineers'
	},
	{
		realName: 'G',
		screenName: '@iagoloadgen',
		description: '1/2 of @JackAndJack AWL Music Video out now: https://t.co/sJxi73D29J'
	},
	{
		realName: 'Michael Van Gerwen',
		screenName: '@MvG180',
		description: 'World Number 1 Darts player. Two-time World Champion. Sponsored by @leylandpaints @keukenconcurren @DLM_lease @XQmaxDarts Managed by @modusdarts180 & @zwasports'
	},
	{
		realName: 'G',
		screenName: '@grantlandis',
		description: '17. Singer/Songwriter. snapchat: grantmdlandis MGMT:info@hypeprojects.com check out my new song why you gotta be you on soundcloud please❤️ link is down there⬇️'
	},
	{
		realName: 'Greg Leding',
		screenName: '@g',
		description: 'Beer. Design. Food. Politics. Sports. Travel. The man who accompanies @eironside to places.'
	}
]

const api = {
	getItems: (filter: string) => {
		let matches = [];

		forEach(items, (item) => {
			if (item.realName.match(filter))
				matches.push(item);
		});

		return matches;
	}
}

export default api