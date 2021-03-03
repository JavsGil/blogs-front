import axios from 'axios';
import {api_uri} from '../Env';

export default
{	
	register : data => axios.post(api_uri('register'), data),
	login : data => axios.post(api_uri('login'), data),
}