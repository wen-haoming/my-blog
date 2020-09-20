import {useEffect,useState} from 'react'
import App from "next/app";
import "antd/dist/antd.css";
import { BackTop,Layout } from "antd";
import {ArrowUpOutlined} from  '@ant-design/icons';
import Header from "comp/Header.js";
import Head from 'next/head'
import{getTypeInfo} from '../api/index'
import Footer from "comp/Footer.js";

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

  
  

  return (
    <>
    <Head>
      <title>whm.zone</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
        <Layout>
          {/* 中间内容组件 */}
          <Component {...pageProps} />
          {/* 底部组件 */}
          <Footer/>
        </Layout>
      {/* 向上锚点 */}
      <BackTop>
        <div style={style}>
            <ArrowUpOutlined style={{fontSize:20,fontWeight:600}} />  
        </div>
      </BackTop>
    </>
  );
}




export default MyApp;
