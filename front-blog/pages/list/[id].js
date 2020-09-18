import React, { useState, useEffect } from "react";
import "styleGlobal/comm.less";
import "stylePages/Home.less";
import "styleComp/md.less";

import Head from "next/head";
import Link from 'next/link'
import { Row, Col, List, Breadcrumb } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { getArticleList, getTypeInfo } from "../../api/index";
import { useRouter } from "next/router";

import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import Header from "comp/Header.js";
import Author from "comp/Author.js";
import Footer from "comp/Footer.js";

export default ({ listContent, type,types }) => {
  const [mylist, setMylist] = useState(listContent);
  const router = useRouter();

  useEffect(() => {
    setMylist(listContent);
  }, [listContent]);

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
    sanitize: false,
    xhtml: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
  });
  let header = (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => router.push("/")}>
          <a>
            <span className="bread-txt">首页</span>{" "}
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
              <span className="bread-txt">{type.typeName}</span>{" "}
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
      <Header types={types} />
      <Row className="home-main" type="flex" justify="center">
        <Col className="home-main-left" xs={23} sm={23} md={16} lg={16} xl={16}>
          <List
            dataSource={listContent}
            itemLayout="vertical"
            header={header}
            renderItem={(item) => (
              <List.Item>
                <a
                  onClick={() => {
                    router.push("/detail/[id]", `/detail/${item.id}`);
                  }}
                  className="list-title"
                >
                  {item.title}
                </a>
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
                <div
                  className="list-context"
                  dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                ></div>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col className="home-main-right" xs={0} sm={0} md={5} lg={5} xl={5}>
          <Author></Author>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  let { data } = await getTypeInfo();
  return {
    paths: data.map((item) => ({
      params: { id: String(item.id),type:123 },
    })),
    fallback: false,

  };
}

export async function getStaticProps(context) {
    let res = await getArticleList(context.params.id);
      let typeRes = await getTypeInfo()

  return {
    props: {
      listContent: res.data.data,
      type:typeRes.data.filter(item=> String(context.params.id) === String(item.orderNum))[0],
      types:typeRes.data
    },
  };
}
