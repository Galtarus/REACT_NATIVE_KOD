import Axios from 'axios';

const BASE_URL = 'https://us-central1-projetbateau-d52df.cloudfunctions.net/';

export function getRessources(ressourceName) {
	const url = BASE_URL + ressourceName;
	return Axios.get(url).then((res) => {
		return res.data;
	});
}
