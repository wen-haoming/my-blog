import { history, Reducer, Effect,Subscription } from 'umi';
import { getTypeInfo, postAddArticle, getList, deleteList,query, edit} from '../api';
import { message } from 'antd';

export const state = {
  typeInfoArr: [],
  list: {
    data: [],
    page: 0,
    pageSize: 0,
    totalCount: 0,
  },
  formData:{

  }
};

const delay = (timeout: number) =>
  new Promise(resolve => setTimeout(resolve, timeout));

export type State = typeof state;

interface Modal {
  namespace: string;
  state: State;
  reducers: {
    setTypeInfoArr: Reducer<State>;
    setList: Reducer<State>;
    setFormData:Reducer<State>;
  };
  effects: {
    fetchTypeInfoArr: Effect;
    fetchAddArticle: Effect;
    fetchList: Effect;
    deleteList: Effect;
    getQuery:Effect
    posetEdit:Effect;
  };
  subscriptions:{
    setup:Subscription
  }
}

const modal: Modal = {
  namespace: 'article',
  state,
  reducers: {
    setTypeInfoArr(state, { payload }) {
      return {
        ...state,
        typeInfoArr: payload,
      };
    },
    setList(state, { payload }) {
      return {
        ...state,
        list: {
          ...payload,
          data: payload.data.map((item: any, idx: number) => ({
            ...item,
            key: idx,
          })),
        },
      };
    },
    setFormData(state,{payload}){
        return {
          ...state,
          formData:payload
        }
    }
  },
  effects: {
    *fetchTypeInfoArr({ payload }, { call, put }) {
      try {
        let res = yield call(getTypeInfo);
        let val = res.data.data;
        if (val !== '没有登录') {
          yield put({ type: 'setTypeInfoArr', payload: val });
        }
      } catch (e) {
        console.warn(e);
      }
    },
    *fetchAddArticle({ payload }, { call }) {
      try {
        let { data } = yield call(postAddArticle, payload);
        message.success('发布成功');
      } catch (e) {
        message.error('发布失败');
      }
    },
    *fetchList({ payload }, { put, call }) {
      let res = yield call(getList, payload);
      yield put({ type: 'setList', payload: res.data });
    },
    *deleteList({ payload }, { put, call }) {
      try {
        let id = payload.id;
        yield call(deleteList, id);
        delete payload.id
        yield put({ type: 'fetchList', payload });
        message.success('删除成功');
      } catch (e) {
        message.success('删除失败');
      }
    },
    *getQuery({payload},{put,call}){
         const id = payload
         let {data} = yield call(query,id)
                      yield put({type:'setFormData',payload:data.data})
                      history.push('/addArticle')
    },
    *posetEdit({payload},{call}){
        let res =  yield call(edit,payload)
          if(res.data.status === 'success'){
              message.success('修改成功')
              history.push('/')
            }else{
              message.success('修改失败')
            }
    }
  },
  subscriptions:{
      setup({history,dispatch}){
          return history.listen(({pathname})=>{
              if(pathname !== '/addArticle'){
                  dispatch({type:'setFormData',payload:{}})
              }
          })
      }
  }
};

export default modal;
