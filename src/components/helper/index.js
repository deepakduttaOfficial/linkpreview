import axios from "axios";
const API = process.env.REACT_APP_PREVIEW_SECREACT_URL;

export const preview = (url) => {
  return axios
    .get(`${API}${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
