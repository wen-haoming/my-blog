import { useState } from "react";
import { Avatar, Divider, Popover, Row,Col } from "antd";
import "styleComp/Author.less";

import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Author = () => {
    let contactComp = (<div className="author-contact">
     <Popover
    content={<a href="https://github.com/wen-haoming">github </a>}
    arrowPointAtCenter
    trigger="hover"
  >
    <Avatar
      size={28}
      icon={<GithubOutlined />}
      className="account"
    ></Avatar>
  </Popover>
  <Popover
    content={
      <span className="author-introduction">邮箱: 435203093@qq.com</span>
    }
    arrowPointAtCenter
    trigger="hover"
  >
    <Avatar
      size={28}
      icon={<MailOutlined />}
      className="account"
    ></Avatar>
  </Popover>
  <Popover
    content={
      <span className="author-introduction">公众号: whm_zone</span>
    }
    arrowPointAtCenter
    trigger="hover"
  >
    <Avatar
      size={28}
      icon={<WechatOutlined />}
      className="account"
    ></Avatar>
  </Popover>
  <Popover
    content={<img width="200" height="250" src="../static/img/my.jpg" />}
    arrowPointAtCenter
    trigger="hover"
  >
    <Avatar
      size={28}
      icon={<WechatOutlined />}
      className="account"
    ></Avatar>
  </Popover>
  </div>)

  return (
    <div className="author-div comm-box">
      <Row>
            <Col xs={12} sm={24} md={24} lg={24} xl={24} >
              <Avatar size={80} src="../static/img/touxiang.jpg"></Avatar>
          </Col>
          <Col xs={12} sm={0} md={0} lg={0} xl={0} >
          {contactComp}
          </Col>
      </Row>
      <div className="author-introduction">
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24} >富强 民主 文明 和谐</Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24} >
            <Divider>社交账号</Divider>
          </Col>
          
        </Row>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24} >
                {contactComp}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Author;
