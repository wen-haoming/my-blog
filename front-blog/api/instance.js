import axios from 'axios'

// import axios from "axios";

const config = {};
  if(process.env.NODE_ENV === 'development'){
    if (typeof window === "undefined") {
      //服务器
      config.baseURL = "http://127.0.0.1:7002/";
    } else {
      //浏览器
      config.baseURL = "http://127.0.0.1:7002/";
    //   config.baseURL = "http://yuanjin.tech:5005/";
    }
  }else{
      config.baseURL = "http://47.107.232.30/";
  }
 
console.log(process.env,'=========================')


const instance = axios.create(config);

export default instance;
