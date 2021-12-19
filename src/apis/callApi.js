import axios from 'axios';
import * as Config from '../constants/config';

export default function callApi(endpoint, method = 'GET', body, token = null) {
    return axios({
        method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch(err => {
        return err
    });
}