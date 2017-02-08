import { ProfileCard } from './model'
import { forEach, includes } from 'lodash'

const items: ProfileCard[] = [
  {
    "id": "589acaef5719420a3336e320",
    "realName": "Carver Casey",
    "screenName": "carvercasey@centuria.com",
    "description": "Consequat aliqua amet sit ex enim nisi amet in adipisicing minim. Tempor quis deserunt occaecat minim exercitation cupidatat quis. Irure magna minim nisi magna non. Nulla veniam ut irure culpa sint et.\r\n"
  },
  {
    "id": "589acaef393b799bdae8cc30",
    "realName": "Stuart Gill",
    "screenName": "stuartgill@centuria.com",
    "description": "Esse ullamco est aute duis incididunt ut fugiat dolor aliquip cupidatat nostrud. Dolore aute nostrud ad dolor et officia magna mollit mollit aliquip ipsum officia. Cillum anim et ullamco ex aliqua fugiat velit duis laboris esse nostrud pariatur excepteur quis. Eu cupidatat quis cupidatat occaecat anim quis nulla est laborum ex laboris elit tempor. Sunt cillum ut irure ex ea est fugiat sunt minim occaecat anim nisi duis.\r\n"
  },
  {
    "id": "589acaef3b597dfdb4fb046a",
    "realName": "Christa Bishop",
    "screenName": "christabishop@centuria.com",
    "description": "Quis elit deserunt excepteur occaecat culpa. Pariatur ut cillum aute irure veniam elit pariatur. Cupidatat ex adipisicing do deserunt tempor sunt incididunt. Adipisicing nisi irure irure excepteur ex deserunt ex laboris ipsum et esse deserunt ullamco. Ea pariatur duis cillum ipsum Lorem consectetur nisi. Enim elit anim aliquip mollit qui.\r\n"
  },
  {
    "id": "589acaefb9ebf05585fc7679",
    "realName": "Donna Howell",
    "screenName": "donnahowell@centuria.com",
    "description": "Esse et aute nulla ex velit laboris do esse ullamco. Irure dolore exercitation et quis consequat qui nisi consectetur adipisicing reprehenderit amet eiusmod. Sint irure ullamco velit ipsum duis culpa eu culpa voluptate labore consectetur culpa. Lorem esse ut veniam magna amet anim cillum aliqua veniam.\r\n"
  },
  {
    "id": "589acaefc936dd6ac8e85e15",
    "realName": "Maryellen Faulkner",
    "screenName": "maryellenfaulkner@centuria.com",
    "description": "Ad laboris et labore irure tempor laborum reprehenderit deserunt sit cillum tempor. Ex dolore laborum aliquip amet do ea eiusmod ad commodo. In culpa aliquip magna deserunt. Aliqua quis nostrud nulla officia ex reprehenderit adipisicing laborum aliqua fugiat sint ipsum exercitation. Cupidatat do quis fugiat ullamco pariatur adipisicing sit duis mollit velit cupidatat commodo magna fugiat. Consectetur qui proident aute Lorem.\r\n"
  },
  {
    "id": "589acaef3b4086e47761fc69",
    "realName": "Foreman Schmidt",
    "screenName": "foremanschmidt@centuria.com",
    "description": "Ad ea aliqua sunt esse do minim laboris enim sit officia mollit eu ad laboris. Do sit labore eiusmod sit reprehenderit. Magna esse excepteur cillum esse sit Lorem et velit nisi proident consequat incididunt aliqua et. Esse fugiat velit proident minim nisi aliquip esse officia magna est veniam mollit. Duis commodo incididunt sint do voluptate adipisicing tempor nisi laborum excepteur quis dolore et consequat.\r\n"
  },
  {
    "id": "589acaef77176ff4266ba5b4",
    "realName": "Alyce Whitehead",
    "screenName": "alycewhitehead@centuria.com",
    "description": "Pariatur minim occaecat aute officia do. Consectetur ad fugiat eiusmod Lorem. Deserunt mollit duis mollit aliquip fugiat consequat. Sit fugiat occaecat ullamco laborum non voluptate. Quis ea elit occaecat id sint aliquip dolor irure consequat ea eiusmod nisi.\r\n"
  }
]

const STUB_API = {
	get: (filter: string) => {
		const value = filter.trim();

		let matches = [];

		forEach(items, (item) => {
			if (includes(item.realName, value)
				|| includes(item.screenName, value)
				|| includes(item.description, value)) {
				matches.push(item);
			}
		});

		return matches;
	}
}

export default STUB_API