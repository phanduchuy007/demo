import axios from 'axios';
export default (url, method, token, data) =>
    axios({
        url,
        method,
        headers: {
            "content-type": "application/json",
            token: token,
        },
        data: {
            ...data,
        },
    });