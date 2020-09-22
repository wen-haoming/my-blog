import React, { useEffect } from 'react';
import './index.less';
import {
  Row,
  Col,
  Input,
  Select,
  Button,
  DatePicker,
  message,
  Spin,
  Modal,
} from 'antd';
import { connect, useDispatch, useModel, Dispatch } from 'umi';
import { State as articleState } from '../../models/article';
import { useReactive, useMethods } from 'proxy-hooks';

import marked from 'marked';
import { State } from '../../models/article';
import moment from 'moment';
import dayjs from 'dayjs';

const { Option } = Select;
const { TextArea } = Input;

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

let saveObj = {
  title: '文章标题',
  article_content: '编辑内容',
  introduce: '简介内容',
  addTime: '发布日期',
  type_id: '选择的文章类别',
};

const AddArticle: React.FC<props> = props => {
  const { dispatch, typeInfoArr, addArticleLoading, formData } = props;

  const [state, methods] = useMethods(
    {
      articleId: '', // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
      title: '', //文章标题
      article_content: '', //的编辑内容
      introduce: '', //简介内容
      addTime: moment(new Date()), //发布日期
      updateDate: '', //修改日志的日期
      type_id: '', //选择的文章类别
    },
    {
      // 主内容修改
      changeContent(state, e) {
        state.article_content = e.target.value;
      },
      // 简介内容修改
      changeIntroduce(state, e) {
        let html = marked(e.target.value);
        state.introduce = e.target.value;
      },
      // 标题修改
      changeTitle(state, e) {
        state.title = e.target.value;
      },
      // 发布日期
      changeDate(state, date) {
        state.addTime = date;
      },
      // 更改类型
      changeType(state, type) {
        state.type_id = type;
      },
      async publishFn(state) {
        let obj = {};
        for (let key in saveObj) {
          if (!state[key]) {
            message.warn(saveObj[key] + '不能为空');
            return;
          }
          if (key === 'addTime') {
            obj[key] = moment(state[key]).format('YYYY-MM-DD hh:mm:ss');
          } else {
            obj[key] = state[key];
          }
        }
        if (Object.keys(formData).length > 0) {
          obj = {
            ...obj,
            id:formData.id
          }
          dispatch({ type: 'article/posetEdit', payload: obj });
        } else {
          dispatch({ type: 'article/fetchAddArticle', payload: obj });
        }

        for (let key in state) {
          if (key === 'addTime') {
            state[key] = moment();
          } else {
            state[key] = '';
          }
        }
      },
      updateFormData(state, formData) {
        for (let key in saveObj) {
          if (formData[key]) {
            if (key === 'addTime') {
              state[key] = moment(formData[key]);
            } else {
              state[key] = formData[key];
            }
          }
        }
      },
    },
  );

  useEffect(() => {
    // 初始化请求
    dispatch({ type: 'article/fetchTypeInfoArr' });

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: false,
      sanitize: false,
      breaks: false,
      smartLists: true,
      smartypants: false,
    });
  }, []);

  useEffect(() => {
    methods.updateFormData(formData);
  }, [formData]);

  return (
    <Spin spinning={addArticleLoading === true}>
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={50}>
            <Col span={20}>
              <Input
                value={state.title}
                onChange={methods.changeTitle}
                placeholder="博客标题"
              ></Input>
            </Col>
            <Col span={4}>
              {/* 类别数据 */}
              <Select
                style={{ width: 100,marginRight:20 }}
                placeholder="请选择类型"
                value={state.type_id}
                onChange={methods.changeType}
              >
                {typeInfoArr.map(item => {
                  return (
                    <Option key={item.id} value={item.id}>
                      {item.typeName}
                    </Option>
                  );
                })}
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                className="markdown-content"
                onChange={methods.changeContent}
                rows={35}
                placeholder="文章内容"
              ></TextArea>
            </Col>
            <Col span={12}>
              <div
                className="show-html"
                dangerouslySetInnerHTML={{
                  __html: marked(state.article_content),
                }}
                defaultValue="等待编辑"
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row gutter={10}>
            <Col>
              <Button  onClick={methods.publishFn} type="primary">
                发布文章
              </Button>
            </Col>
            <Col>
            <Button onClick={()=>{ dispatch({type:'article/getUpdateNext'}) }} type="primary">
                更新系统
              </Button>
            </Col>
            </Row>
            <Row>
            <Col span={24}>
              <br />
              <TextArea
                onChange={methods.changeIntroduce}
                className="markdown-content"
                rows={4}
                placeholder="文章简介"
              ></TextArea>
              <br />
              <br />
              <div
                className="introduce-html"
                dangerouslySetInnerHTML={{ __html: marked(state.introduce) }}
              ></div>
            </Col>
            <Col span={12}>
              <div className="date-select">
                <DatePicker
                  value={state.addTime}
                  onChange={methods.changeDate}
                  placeholder="发布日期"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Spin>
  );
};

const mapStateToProps = (state: any) => {
  const { article, loading } = state;
  // as State
  return {
    typeInfoArr: article.typeInfoArr as Array<any>,
    addArticleLoading: loading.effects['article/fetchAddArticle'],
    formData: article.formData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
