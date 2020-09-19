import axios,{AxiosRequestConfig} from 'axios'
import {history} from 'umi'
import {message} from 'antd'
// import axios from "axios";

const config:AxiosRequestConfig = {};
  if(  process.env.NODE_ENV === 'development'){
    config.baseURL = "http://127.0.0.1:7002/";
  }else{
    config.baseURL = "http://47.107.232.30:7002";
  }
  config.withCredentials = true;

const instance = axios.create(config);

instance.interceptors.response.use((response)=>{
  return response
},(response)=>{
  history.push('/login')
  message.error('接口错误')
})

export default instance;
