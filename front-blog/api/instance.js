import axios from 'axios'

// import axios from "axios";

const config = {};
    if (typeof window === "undefined") {
      //服务器
      config.baseURL = "http://127.0.0.1:7002/";
    } else {
      //浏览器
      config.baseURL = "http://127.0.0.1:7002/";
    //   config.baseURL = "http://yuanjin.tech:5005/";
    }

const instance = axios.create(config);

export default instance;
