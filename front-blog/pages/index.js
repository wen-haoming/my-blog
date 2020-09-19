import React,{useState, useMemo} from 'react';
import "styleGlobal/comm.less";
import 'stylePages/Home.less';
import 'styleComp/md.less'

import Head from 'next/head'
import Link from 'next/link'
import {Row,Col,List, Divider} from 'antd'
import { CalendarOutlined ,FolderOutlined,FireOutlined} from '@ant-design/icons';
import {getArticleList,getTypeInfo} from '../api/index'
import {useRouter} from 'next/router'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Footer from '../components/Footer';

const Home =  ({list,types})=>{
    const [ mylist , setMylist ] = useState(list)
    const router = useRouter()
   const renderer = new marked.Renderer();

   marked.setOptions({
     renderer: renderer,
     gfm: true,
     pedantic: false,
     sanitize: false,
     tables: true,
     breaks: false,
     smartLists: true,
     smartypants: false,
     sanitize:false,
     xhtml: false,
     highlight: function (code) {
      return hljs.highlightAuto(code).value;
     }
   }); 
    return <>
        
       {/* <Header types={types} /> */}
       <Row className="home-main" type="flex" justify="center">
           <Col className="home-main-left" xs={23} sm={23} md={16} lg={16} xl={16}>
            <List 
            dataSource={mylist} 
            itemLayout="vertical" 
            header={ <div>最新日志</div>  }
            renderItem={item=>(
                <List.Item>
                    <a onClick={()=>{router.push('/detail/[id]',`/detail/${item.id}`)}} className="list-title">{item.title}</a>
                   <div className="list-sub-title">
                       <div className="sub-item">
                        <CalendarOutlined />
                          <span className="sub-txt">{item.addTime}</span>
                       </div>
                       <div className="sub-item">
                       <FolderOutlined />
                          <span className="sub-txt">{item.typeName}</span>
                       </div>
                       <div className="sub-item">
                       <FireOutlined />
                          <span className="sub-txt">{item.view_count}</span>
                       </div>
                   </div>
                   <div className="list-context"  dangerouslySetInnerHTML={{__html:marked(item.introduce)}} / >
                </List.Item>)}
            >
            </List>
           </Col>
           <Col className="home-main-right" xs={0} sm={0} md={5} lg={5} xl={5}>
           <Author></Author>
           </Col>
       </Row>
       <Footer/>
    </>
}

export async function getStaticProps (context){
    async function getData(){
       return getArticleList()
   }
   let res =  await getData()
    let typesRes =   await getTypeInfo();
     
      return {
          props:{
            list:res.data.data,
            types:typesRes.data
          }
      }
}

export default Home


