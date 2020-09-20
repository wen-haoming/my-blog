import Reac, { useEffect, useState, useMemo } from "react";
import "../static/style/components/header.less";
import { Row, Col, Menu, Icon, Affix } from "antd";
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileTwoTone,
  CoffeeOutlined,
} from "@ant-design/icons";
import { getTypeInfo } from "../api/index";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderComp = ({types}) => {
  const router = useRouter();
  // const [types,setTypes] = useState([])

  // useEffect(()=>{
  //   void async function(){
  //     let typeRes = await getTypeInfo();
  //     setTypes(typeRes.data)
  //   }()
  // },[])

  function getIcon(key) {
    switch (key) {
      case 1:
        return <VideoCameraOutlined />;
      case 2:
        return <CoffeeOutlined />;
      case 3:
        return <SmileTwoTone />;
      default:
        return <VideoCameraOutlined />;
    }
  }

  return (
    <Affix>
      <div className="header">
      <Row type="flex" justify="center">
        <Col offset={0.5} xs={17} sm={17} md={11} lg={11} xl={11}>
          <Link href="/">
            <a>
              <span className="header-logo">whm.zone</span>
            </a>
          </Link>
        </Col>
        <Col xs={5} sm={5} md={9} lg={9} xl={9}>
          <Menu mode="horizontal">
            <Menu.Item key="/" onClick={() => router.push("/")}>
              <HomeOutlined />
              首页
            </Menu.Item>
            {types&&types.map((item) => {
              return (
                <Menu.Item
                  key={item.orderNum}
                  onClick={() =>
                    router.push("/list/[id]", `/list/${item.orderNum}`)
                  }
                >
                  {getIcon(item.orderNum)}
                  {item.typeName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
    </Affix>
  );
};


export default HeaderComp;
