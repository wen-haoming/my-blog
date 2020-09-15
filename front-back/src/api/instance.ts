import axios,{AxiosRequestConfig} from 'axios'
import {history} from 'umi'
import {message} from 'antd'
// import axios from "axios";

const config:AxiosRequestConfig = {};
  config.baseURL = "http://127.0.0.1:7002/";
  config.withCredentials = true

const instance = axios.create(config);

instance.interceptors.response.use((response)=>{
  return response
},(response)=>{
  if(response.data&&response.data.data && response.data.data.data.status === 'fail'){
    history.push('/login')
  }else{
    message.error(response.status)
  }
})

export default instance;
