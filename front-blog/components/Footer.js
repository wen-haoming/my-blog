import "styleComp/Footer.less";
import { Layout, spanider,Space,Row,Col ,Divider} from "antd";
import Author from 'comp/Author';
const { Header, Footer, Sider, Content } = Layout;

const FooterComp = () => {
  return (

      <Footer className="footer">
      <Divider></Divider>
       <Row>
           <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Author></Author>
           </Col>
       </Row>
       <Row justify="center" gutter={[0,0]}>
            <span className="footer-space">Designed by 温浩明</span>
            <span className="footer-space">Powerd by <a href="https://ant.design/index-cn">Ant-design</a> & <a href="https://www.nextjs.cn/">nextjs</a> </span>
            <span className="footer-space">Copyright© 2020 温浩明</span>
            <span className="footer-space"><a href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备20071658号</a></span>
       </Row>
      </Footer>
  );
};

export default FooterComp;
