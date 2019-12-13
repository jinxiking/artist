import axios from 'axios';

const ajax = axios.create({
  //测试
  // baseURL: 'http://mi.baozheng.cc/open/',
  //生产
  //   baseURL: process.env.VUE_APP_URL,
  baseURL:"https://mi.baozheng.cc/open/api/",
  timeout: 6000,
});
//
ajax.interceptors.request.use(config => {
  
    return config
}, error => {

  Promise.reject(error);
});

ajax.interceptors.response.use(
  response => {
    return response
  },
  error => {
   
    const errorResponse = error.response;
  
    return Promise.reject(errorResponse)
  });

export default ajax
