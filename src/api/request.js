//对axios的二次封装
//第一步 导入
import axios from "axios";
//基础配置
// axios.defaults.baseURL = "../../data";
axios.defaults.timeout = 100000;
//
// function abc() {
//   return axios.get("/api/homecasual");
// }
// console.log(abc);

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

//请求方式进行一次封装
function $http(url, data = {}, method = "GET") {
  // let promise = null;
  // if (method === "GET") {
  //   promise = axios.get(url, {
  //     params: data
  //   });
  // } else if (method === "POST") {
  //   axios.post(url, data);
  // }
  // return promise;
  let promise = null;
  return new Promise(function(resolve, reject) {
    if (method === "GET") {
      promise = axios.get(url, {
        params: data
      });
    } else if (method === "POST") {
      promise = axios.post(url, data);
    }
    promise
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
    return promise;
  });
}

export default $http;
