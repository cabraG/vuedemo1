
import axios from 'axios'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


export default axios;
