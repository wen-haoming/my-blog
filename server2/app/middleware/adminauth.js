const {Base64} = require('js-base64')


// console.log(Base64.encode(JSON.stringify({
//     username:'wenhaoming',
//     password:'123456'
// })))


module.exports = (options)=>{
    return async (ctx,next)=>{
             let token = ctx.cookies.get('blog');
            if(token === 'eyJ1c2VybmFtZSI6Indlbmhhb21pbmciLCJwYXNzd29yZCI6IjEyMzQ1NiJ9'){
                  await next()
            }else{
                ctx.status = 401
                ctx.body = {data:'没有登录',status:'fail'}
            }
    }
}