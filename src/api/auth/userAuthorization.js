/* eslint-disable */
import axios from 'axios';

export async function loginAsync(formData) {
  // console.log(formData);
  // const response = formData;
  // return response;
  const response = await axios.post('/api/auth/login', formData);
  console.log(response);
  localStorage.setItem('CURRENT_USER', JSON.stringify(response.data));
  return response.data;
}

export async function isAuthAsync() {
  const response = await axios.get('/api/auth/isAuth');
  console.log(response);
  // localStorage.setItem('CURRENT_USER', JSON.stringify(response.data));
  return response.data;
}

export async function logOutAsync() {
  const response = await axios.get('/api/auth/logout');
  console.log(response);
  if (!response.data.logout) {
    throw new Error('로그 아웃에 실패했습니다.');
  }
  localStorage.removeItem('CURRENT_USER');
  return response.data;
}
