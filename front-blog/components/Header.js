import Reac,{useEffect,useState,useMemo} from 'react'
// import 'static/style/components/header.less'
import '../static/style/components/header.less'
import {Row,Col,Menu,Icon,Button} from 'antd'
import {HomeOutlined,VideoCameraOutlined,SmileTwoTone,CoffeeOutlined } from '@ant-design/icons';
import {getTypeInfo} from '../api/index'
import {useRouter} from 'next/router'

function useProxy(initialState){
  const [state, setState] = useState(initialState)

 let proxyState = useMemo(()=>{
        let proxyState = new Proxy(initialState,{
            set(target,name,value,property){
                setState({})
                return Reflect.set(target,name,value,property);
            },get(target,name,property){
                return Reflect.get(target,name,property);
            }
        })
        return proxyState
    },[])

    return [proxyState,state]
}

const Header = ()=>{
        const [types,setTypes] = useState([])
        let [proxyState,state] = useProxy({count:0})
        const router = useRouter();

       useEffect(()=>{
           const getTypeInfoFn = async ()=>{
               return  await getTypeInfo()
            }
            getTypeInfoFn().then(res=>{
                console.log(res.data)
                setTypes(res.data)
            })
       },[])

    function getIcon(key){
        switch(key){
            case 1:
            return <VideoCameraOutlined/>
            case 2:
             return <CoffeeOutlined />
            case 3:
            return <SmileTwoTone/>
            default :
            return <VideoCameraOutlined/>
        }
    }

    return <div className="header">
           <Row  type="flex" justify="center"  >
                <Col offset={0.5} xs={17} sm={17} md={14} lg={14} xl={14}>
                    <span className="header-logo">小明</span>
                    <span className="header-txt">专注前端</span>
                </Col>
                <Col xs={5} sm={5} md={7} lg={7} xl={7}>
                    <Menu  mode="horizontal">
                        <Menu.Item key="/" onClick={()=>router.push('/')}  >
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {types.map((item)=>{
                            return <Menu.Item key={item.orderNum} onClick={()=>router.push('/list/[id]',`/list/${item.orderNum}`)} >
                           { getIcon(item.orderNum)}
                            {item.typeName}
                        </Menu.Item>
                        })}
                    </Menu>
                </Col>
                
           </Row>
    </div>
}


export default Header