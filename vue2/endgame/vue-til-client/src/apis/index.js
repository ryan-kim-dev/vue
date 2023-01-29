import { axiosInstance } from '../utils';

export const registerUser = (userInfo) => {
  return axiosInstance.post('/signup', userInfo);
};

export const loginUser = () => {};
