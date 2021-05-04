import axios from "axios";

const axiosApi = axios.create({
  baseURL: (process.env.VUE_APP_ROOT_API !== undefined) ? process.env.VUE_APP_ROOT_API : "http://localhost:8080/api",
  // baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    "Content-type": "application/json"
  }
})
const getToken = (name)  => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export const setAuthHeader = (token) => {
axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
setAuthHeader(getToken('au_tk_ntx'));

export default axiosApi;