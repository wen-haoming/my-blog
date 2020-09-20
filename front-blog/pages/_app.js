import {useEffect,useState} from 'react'
import App from "next/app";
import "antd/dist/antd.css";
import { BackTop } from "antd";
import {ArrowUpOutlined} from  '@ant-design/icons';
import Header from "comp/Header.js";
import Head from 'next/head'
import{getTypeInfo} from '../api/index'

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};



function MyApp({ Component, pageProps,types }) {

    const [globalTypes,setGlobalTypes] = useState({
        types:[]
    })

    useEffect(()=>{
          ( async ()=>{
            let typeRes = await getTypeInfo()
            setGlobalTypes({...globalTypes,types:typeRes.data}) 
          })()
    },[])
  return (
    <>
        <Head>
          <title>Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        </Head>
       <Header types={globalTypes.types} />
      <Component {...pageProps} />
      <BackTop>
        <div style={style}>
            <ArrowUpOutlined style={{fontSize:20,fontWeight:600}} />  
        </div>
      </BackTop>
    </>
  );
}

export async function getInitialProps(context) {
      let typeRes = await getTypeInfo()
  return {
    props: {
      types:typeRes.data
    },
  };
}


export default MyApp;
