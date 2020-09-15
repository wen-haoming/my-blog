import React,{useEffect,useCallback,useMemo} from 'react';
import { Row, Col, Layout, Input, Space, Table ,Button,Modal,Popconfirm} from 'antd';
import './index.less';
import {connect,Dispatch} from 'umi'
import { ConnectState } from '@/models/connect';
import {useMethods} from 'proxy-hooks'



type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

  const List:React.FC<Props> = (props) => {

  const {listData,current,totalSize,dispatch,loading,pageSize} = props

  const [state,methods] = useMethods({
    inputVal:'',
    visible:true
  },{
      setInputVal(state,e){
          state.inputVal = e.target.value
      },
      openModal(state){
        state.visible = true
      },
      confirmModal(state,...args){
       const [,arc] = args
       const {id} = arc
        dispatch({type:'article/deleteList',payload:{id,page:1,pageSize:10,order:'desc'}})
        state.visible = false
      },
      hideModal(state,){
          state.visible = false
      }
  })


  const columns = useMemo(()=>{
    return [
      {
        title: '标题',
        dataIndex: 'title',
      },
      {
        title: '简介',
        dataIndex: 'introduce',
      },
      {
        title: '发布时间',
        dataIndex: 'addTime',
      },
      {
        title: '访问量',
        dataIndex: 'view_count',
      },
      {
          title:'操作',
          dataIndex:'operator',
          render:(text, record)=>{
            return <Space>
              <Button onClick={()=> dispatch({type:"article/getQuery",payload:record.id}) }  type="primary">编辑</Button>
              <Popconfirm okText="确认删除？" cancelText="取消" title="是否删除？" onConfirm={()=>methods.confirmModal(text, record)} >
                <Button onClick={()=>methods.openModal(text, record)}  danger type="ghost">删除</Button>
              </Popconfirm>
            </Space>
          }
      }
    ];
  },[])




  const fetchInputVal =  useCallback(()=>{
    dispatch({type:'article/fetchList',payload:{page:current,order:'desc',txt:state.inputVal}})
  },[state.inputVal])



  function onChange(pagination, filters, sorter, extra) {
    const {current,pageSize = 10,total} = pagination
    // page?:number
    // pageSize?:number
    // txt?:string
    // order?:'desc'|'asc'
    dispatch({type:'article/fetchList',payload:{page:current,pageSize:pageSize,order:'desc'}})
  }

  useEffect(()=>{
    dispatch({type:'article/fetchList',payload:{order:'desc'}})
  },[])

  return (
    <div className="list-wrap">
      <Row className="header" gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Input allowClear value={state.inputVal} onChange={methods.setInputVal} placeholder="关键字搜索" size="middle" style={{width:'300px',marginRight:'10px'}} />
          <Button type="primary" onClick={fetchInputVal} >搜索</Button>
        </Col>
      </Row>
      <div className="table">
        <Table loading={loading} columns={columns} dataSource={listData}  pagination={{current:current,pageSize:10,total:totalSize}} onChange={onChange} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: ConnectState) => {
  const { article:{list:{data,page,totalCount,pageSize}},loading} = state;
  return {
     listData:data,
     current:page,
     totalSize:totalCount,
     pageSize:pageSize,
     loading:loading.effects['article/fetchList']
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });


export default connect(mapStateToProps,mapDispatchToProps)(List) ;
