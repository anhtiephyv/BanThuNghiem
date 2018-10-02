import axios from 'axios';
import * as Config from './../constant/Config';
export default function callApi(endpoint, medthod = 'GET', data) {
    return axios({
        method: medthod,
        url: `${Config.API_URL}/${endpoint}`,
        data:data
    }).catch(err => { console.log(err) });
}