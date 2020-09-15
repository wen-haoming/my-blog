import { history, Reducer, Effect } from 'umi';
import { postLogin } from '../api';
import { message } from 'antd';

const state = {
  loginStatus: false,
};
const delay = (timeout: number) =>
  new Promise(resolve => setTimeout(resolve, timeout));

export type State = typeof state;

interface Modal {
  namespace: string;
  state: State;
  reducers: {
    setLoginStatus: Reducer<State>;
  };
  effects: {
    login: Effect;
  };
}

const modal: Modal = {
  namespace: 'user',
  state,
  reducers: {
    setLoginStatus(state, { payload }) {
      return { ...state, loginStatus: payload };
    },
  },
  effects: {
    *login({ payload }, { put, call }) {
      try {
        let res =  yield call(postLogin, payload);

        if(res.data.status === 'success'){
          message.success('登录成功');
          yield put({type:'setLoginStatus',payload:true})
          yield call(delay,1500)
          history.push('/')
        }else{
          console.warn(res);
          message.error('登录失败');
        }
      } catch (e) {
        console.warn(e);
        message.success('登录失败');
      }
    },
  },
};

export default modal;
