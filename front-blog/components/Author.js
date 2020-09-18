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
                  {/* <Avatar size={80} src="https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*OwZWQ68zSTMAAAAAAAAAAABkARQnAQ"></Avatar>  */}
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