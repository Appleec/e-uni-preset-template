// Imports
import axios from 'axios';

// Store
import { useAppStore } from '@/stores/app';

// Type
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// Base configuration
const service = axios.create({
  // url = base url + request url
  // baseURL: process.env.VITE_BASE_API,
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: false,
  // withCredentials: true, // send cookies when cross-domain requests
  // request timeout
  timeout: 50000,
})

// request interceptor
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // do something before request is sent
      const { token: accessToken } = useAppStore();
      // console.log('=>', accessToken)
      if (accessToken) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config
    },
    (error: any) => {
      // do something with request error
      console.log('=>ERROR:', error) // for debug
      return Promise.reject(error);
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    (response: AxiosResponse) => {
      const res = response.data;
      const { code, message } = res || {};

      // NOTE - 200 0
      if (![200, 0].includes(code)) {
        return Promise.reject(res);
      }
      return Promise.resolve(res);
    },
    (error) => {
      console.log('=>ERROR:', error); // for debug
      // TODO - Unauthorized

      return Promise.reject(error);
    }
)

export default service;


