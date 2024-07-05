import axios from 'axios';
import { BASEURL } from '@/config/index';

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 60000
});

const token = '123';

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.params = config.params || {};
    config.params._t = new Date().getTime();
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    const { data } = response;
    console.log('data', data);
    return data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
