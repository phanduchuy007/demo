import axios from "axios";

export default async (url, method, token, data, param) =>
  await axios({
    url,
    method,
    headers: {
      "content-type": "application/json",
      token_admin: token,
    },
    params: {
      id: `${param}`,
    },
    data: {
      data,
    },
  });
