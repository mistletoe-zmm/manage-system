import axios from './index';

interface ApiResponse<T = any> {
  code: number;
  msg: string;
  data: T; // 这里定义请求返回data数据类型
}

export const getMenu = () => {
  return axios.get<ApiResponse>('/system/getMenu');
};

export const getUserInfo = () => {
  return axios.get('/system/getUserInfo');
};

export default { getMenu, getUserInfo };
