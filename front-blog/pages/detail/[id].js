import React, { useState,useEffect,useMemo} from "react";
import "styleGlobal/comm.less";
import "stylePages/Home.less";
import 'stylePages/Detail.less';
import 'markdown-navbar/dist/navbar.css';
import Link from 'next/link'

import Head from "next/head";
import { Row, Col, List, Breadcrumb,Affix } from "antd";
import {CalendarOutlined,FolderOutlined,FireOutlined} from "@ant-design/icons";
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar'
import {getArticleList,getArticleById,getTypeInfo} from '../../api/index'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';


import Header from "comp/Header.js";
import Author from "comp/Author.js";
import Footer from "comp/Footer.js";
import Tocify from 'comp/tocify.tsx'


 const  Detail = ({content,type}) => {
 const {markdownVal,tocify} =  useMemo(()=>{
    const renderer = new marked.Renderer();

    const tocify = new Tocify()
     
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
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
        <Link href="/">
           <a><span className="title-txt">首页</span></a>
        </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        <Link  href="/list/[id]" as={`/list/${type.orderNum}`}>
          <a> <span className="title-txt">{type.typeName}</span> </a>
        </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="title-txt">{content.title}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
  return (
    <>
      <Row className="home-main" type="flex" justify="center">
        <Col className="home-main-left" xs={23} sm={23} md={16} lg={16} xl={16}>
            <div className="detail-bread">
                {header}
            </div>
            <div className="detail-title">
                {content.title}
            </div>
            <Row className="detail-sub-title" justify="center">
                   <Col className="title-txt" xs={8} sm={8} md={8} lg={8} xl={8}>
                    <CalendarOutlined />
                      <span className="sub-txt">{content.addTime}</span>
                   </Col>
                   <Col className="title-txt" xs={8} sm={8} md={8} lg={8} xl={8}>
                   <FolderOutlined />
                      <span className="sub-txt">{type.typeName}</span>
                   </Col>
                   <Col className="title-txt" xs={8} sm={8} md={8} lg={8} xl={8}>
                   <FireOutlined />
                      <span className="sub-txt">{content.view_count}</span>
                   </Col>
            </Row>
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
    </>
  );
}


export async function getStaticProps (context){
 
  let res = await getArticleById(context.params.id)
  let typeRes = await getTypeInfo()
     return {
        props:{
          content:res.data.data[0],
          type:typeRes.data.filter(item=> String(res.data.data[0].typeId) === String(item.orderNum))[0],
          types:typeRes.data
        }
     }
}

export async function getStaticPaths() {

  let {data} =  await getArticleList()

  data = data.data
  return {
    paths: data.map(item=>({ params:{id:String(item.id)}})),
    fallback: false
  }
}


export default Detail