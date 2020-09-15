import React, { useState,useEffect,useMemo} from "react";
import "styleGlobal/comm.less";
import "stylePages/Home.less";
import 'stylePages/Detail.less';
import 'markdown-navbar/dist/navbar.css';

import Head from "next/head";
import { Row, Col, List, Breadcrumb,Affix } from "antd";
import {CalendarOutlined,FolderOutlined,FireOutlined} from "@ant-design/icons";
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar'
import {getArticleById} from '../api/index'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Header from "comp/Header.js";
import Author from "comp/Author.js";
import Footer from "comp/Footer.js";
import Tocify from 'comp/tocify.tsx'


 function detail({content,}) {

 const {markdownVal,tocify} =  useMemo(()=>{
    const renderer = new marked.Renderer();

    const tocify = new Tocify()
     console.log(renderer,'renderer')
     
     renderer.heading = function(text, level, raw) {
         const anchor = tocify.add(text, level);
         return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
       };
   
      marked.setOptions({
          renderer: renderer, 
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: false,
          smartLists: true,
          smartypants: false,
          highlight: function (code) {
             return hljs.highlightAuto(code).value;
          }
        }); 
   
        let html = marked(content.article_content || '') 

        return {
          markdownVal:html,
          tocify
        }
  },[])

  let header = (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/"> <span className="bread-txt">首页</span> </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/list"> <span className="bread-txt">视频列表</span> </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="bread-txt">xxx</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );

 

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <Header />
      <Row className="home-main" type="flex" justify="center">
        <Col className="home-main-left" xs={23} sm={23} md={16} lg={16} xl={16}>
            <div className="detail-bread">
                {header}
            </div>
            <div className="detail-title">
                {content.title}
            </div>
            <div className="detail-sub-title">
                <div className="list-sub-title">
                   <div className="sub-item">
                    <CalendarOutlined />
                      <span className="sub-txt">2020/9/2</span>
                   </div>
                   <div className="sub-item">
                   <FolderOutlined />
                      <span className="sub-txt">2020/9/2</span>
                   </div>
                   <div className="sub-item">
                   <FireOutlined />
                      <span className="sub-txt">2020/9/2</span>
                   </div>
               </div>
            </div>
            <div className="detail-content" dangerouslySetInnerHTML={{__html: markdownVal}}>
            </div>
        </Col>
        <Col className="home-main-right" xs={0} sm={0} md={5} lg={5} xl={5}>
          <Author></Author>
          <Affix offsetTop={10}>
              <div className="detail-nav comm-box">
                <div className="nav-title">
                      文章列表
                </div>
                  {tocify && tocify.render && tocify.render()}
              </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
}


detail.getInitialProps = async (context)=>{

  const getDetail = async ()=>{
    return  getArticleById(context.query.id)
 }   
 
 let res =  await getDetail()
     return {
         content:res.data.data[0],
     }
}



export default detail