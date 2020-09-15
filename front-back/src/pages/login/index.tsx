import React,{useEffect} from 'react';
import './index.less';
import {
  Card,
  Spin,
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Space,
} from 'antd';
import {connect,Dispatch} from 'umi';
import {ConnectState} from '@/models/connect';

const layout = {};
const tailLayout = {};

type Props = ReturnType< typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const Login:React.FC<Props> = (props) => {

  const {dispatch,loginStatusLoading} = props

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    dispatch({type:'user/login',payload:values})
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Row justify="center" align="middle" className="login">
      <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
      <Spin tip="加载中..." spinning={!!loginStatusLoading}>

        <Card className="login-wrap" title="博客后台">
            {/* 表单wrapper */}
            <Form
              {...layout}
              form={form}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {/* 账号框 */}
              <Form.Item
                name="username"
                label="账号"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              {/* 密码框 */}
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Space direction="horizontal" size={25}>
                  {/* 登录按钮 */}
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                  {/* 重置按钮 */}
                  <Button htmlType="button" onClick={onReset}>
                    重置
                  </Button>
                </Space>
              </Form.Item>
            </Form>
        </Card>
        </Spin>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state: ConnectState) => {
  const { user, loading } = state
  return ({
    loginStatus: user.loginStatus,
    loginStatusLoading:loading.effects['user/login']
  })
}

const mapDispatchToProps = (dispatch:Dispatch)=>({dispatch})



export default connect(mapStateToProps,mapDispatchToProps)(Login);

