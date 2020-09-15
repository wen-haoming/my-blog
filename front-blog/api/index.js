import instance from './instance';


export const getArticleList = async (id ='')=>{
    return instance.get('getArticleList/'+id)
}

export const getArticleById = (id)=>{
    return instance.get('/getArticleById/'+id)
}

export const getTypeInfo = ()=>{
     return instance.get('/getTypeInfo')
}
