import axios from 'axios';
export default (url, method, token_admin, data) =>
    axios({
        url,
        method,
        headers: {
            "content-type": "application/json",
            token_admin: token_admin,
        },
        data: {
            ...data,
        },
    });