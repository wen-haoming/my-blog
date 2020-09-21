import React,{useEffect,useState} from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './index.less';
import {Route,history,useLocation} from 'umi'
import {useReactive} from 'proxy-hooks'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props{

}

const Main:React.FC<Props> = (props) => {

  const location = useLocation()

const [reactiveState,immerReactiveState] = useReactive({
      article:{
        openKeys:"sub1",
        selectKeys:'/'
      }
})

  useEffect(()=>{
    if(location.pathname === '/'){
      reactiveState.article.selectKeys = '/'
      reactiveState.article.openKeys = 'sub1'
    }else if(location.pathname === '/addArticle'){
      reactiveState.article.openKeys = 'sub1'
      reactiveState.article.selectKeys = '/addArticle'
    }
  },[location])

  return (
    <Layout className="main">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo"></div>

        <Menu theme="dark" mode="inline" openKeys={[immerReactiveState.article.openKeys]} selectedKeys={[immerReactiveState.article.selectKeys]}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>文章系统</span>
              </span>
            }
          >
            <Menu.Item onClick={()=>{history.push('/')}} key="/">文章列表</Menu.Item>
            <Menu.Item onClick={()=>{history.push('/addArticle') }} key="/addArticle">添加&修改文章</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ paddingLeft: 50 }}
        >
          <Row justify="start" align="middle" style={{ height: '100%' }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '24px 16px 0',overflow:'auto' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: '100%' }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
