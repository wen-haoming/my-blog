import instance from './instance';

export const postLogin = async (data:any)=>{
    return  await instance.post('/login',data)
}

export const getTypeInfo = async ()=>{
  return  await instance.get('typeInfo')
}

export const postAddArticle = async (data:any)=>{
   return await instance.post('addArticle',data,{
     withCredentials:true
   })
}

interface Query{
    page?:number
    pageSize?:number
    txt?:string
    order?:'desc'|'asc'
}

export const getList = async (query:Query={})=>{
  return await instance.get('list/',{
    params:query
  })
}


export const deleteList = async (id:string)=>{
  return await instance.get('deleteList/'+id)
}

export const query = async (id:string)=>{
  return await instance.get('query/'+id)
}

export const edit = async (data:any)=>{
  return await instance.post('edit/',data)
}

