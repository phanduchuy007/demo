import axios from 'axios';

export default function callAPI(url, method, body) {
    return axios({
        url: url,
        method: method,
        data: body
    })
        .catch(err => {
            alert(err)
        })
};



