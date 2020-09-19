import {useState} from 'react'
import {Avatar,Divider,Popover} from 'antd'
import 'styleComp/Author.less';
import {
    GithubOutlined,
    QqOutlined,
    WechatOutlined,
    MailOutlined
  } from '@ant-design/icons';

const Author = ()=>{
    return <div className="author-div comm-box">
            <div>
                  <Avatar size={80} src="../static/img/touxiang.jpg"></Avatar> 
            </div>
            <div className="author-introduction">
                分享一些
                <Divider>
                    社交账号
                </Divider>
                <a href="https://github.com/wen-haoming">
                <Popover content={ <span className="author-introduction">github</span> }  arrowPointAtCenter trigger="hover">
                    <Avatar size={28} icon={<GithubOutlined/>} className="account"></Avatar>
                </Popover>
                </a>
                <Popover content={ <span className="author-introduction">邮箱: 435203093@qq.com</span> }  arrowPointAtCenter trigger="hover">
                    <Avatar size={28} icon={<MailOutlined/>} className="account"></Avatar>
                </Popover>
                <Popover content={ <span className="author-introduction">公众号: whm_zone</span> }  arrowPointAtCenter trigger="hover">
                    <Avatar size={28} icon={<WechatOutlined />} className="account"></Avatar>
                </Popover>
                <Popover content={ <img width="200" height="250" src="../static/img/my.jpg"/> }  arrowPointAtCenter trigger="hover">
                    <Avatar size={28} icon={<WechatOutlined />} className="account"></Avatar>
                </Popover>

            </div>
    </div>
}

export default Author