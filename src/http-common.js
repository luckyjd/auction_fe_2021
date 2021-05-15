import axios from "axios";
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

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

export const token = getToken('au_tk_ntx');
export const refreshToken = getToken('au_rf_ntx');

export const setAuthHeader = (token) => {
  axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

axiosApi.interceptors.response.use((response) => {
  return response
}, error => {
  const originalRequest = error.config;
  if (error.response.status === 401) {
    return  axiosApi.post('refresh/', {
      refresh: refreshToken
      }).then(response => {
      this.$cookies.set("au_tk_ntx", response.data.access, "15MIN");
      originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
      return  axios(originalRequest).then(response => {
        return response;
      });
    }).catch(function () {
      return error;
    });
  } else  {
    return error;
  }

})

setAuthHeader(getToken('au_tk_ntx'));

export default axiosApi;
