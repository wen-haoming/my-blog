import {useState} from 'react'
import {Avatar,Divider} from 'antd'
import 'styleComp/Author.less';
import {
    GithubOutlined,
    QqOutlined,
    WechatOutlined
  } from '@ant-design/icons';

const Author = ()=>{
    return <div className="author-div comm-box">
            <div>
                  <Avatar size={80} src="https://avatars3.githubusercontent.com/u/42735363?s=460&u=048ca9b722ac4e123dec854a332bcc3c461419d8&v=4"></Avatar> 
            </div>
            <div className="author-introduction">
                Hi,my name is wenhaoming 
                <Divider>
                    社交账号
                </Divider>
                <Avatar size={28} icon={<GithubOutlined/>} className="account"></Avatar>
                <Avatar size={28} icon={<QqOutlined />} className="account"></Avatar>
                <Avatar size={28} icon={<WechatOutlined />} className="account"></Avatar>
            </div>
    </div>
}

export default Author