import axios from 'axios';

const Api = axios.create ({
	baseURL:'https://viacep.com.br/'
});

export default Api;