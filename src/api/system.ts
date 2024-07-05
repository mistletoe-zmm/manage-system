import axios from './index';

export const test = () => {
  return axios.get('/test');
};
