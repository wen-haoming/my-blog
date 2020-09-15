'use strict';
const {Base64} = require('js-base64')
const Controller = require('egg').Controller;
const { v4: uuidv4 } = require('uuid');

let secret = {
      username:'wenhaoming',
      password:'123456'
}

class MainController extends Controller{
    async index(){
        this.ctx.body = 'hi api'   
    }
    async checkLogin(){
        // const username = this.ctx.body.username
        // const password = this.ctx.body.password
       const {username,password} = this.ctx.request.body
       const  sql = `SELECT userName FROM admin_user WHERE userName = '${username}' AND password = '${password}' `
       let res = await this.app.mysql.query(sql)
       if(res.length>0){
           let openId = new Date().getTime();
           this.ctx.session.openId = openId
            this.ctx.cookies.set('blog',Base64.encode(JSON.stringify(secret)))
        this.ctx.body = {data:'登录成功',openId,status:'success'}
       }else{
            this.ctx.body = {data:'登录失败',status:'fail'}
       }
    }  
    async getTypeInfo(){
         const resType = await this.app.mysql.select('type')
          this.ctx.body = {data:resType}
    }
    async addArticle(){
         const body = this.ctx.request.body
         let id = uuidv4()
         body.id = id
            try{
            await this.app.mysql.insert('article',body)
                this.ctx.body = {
                    data:id
                }
            }catch(e){
                this.ctx.status = 500
            }
    }
    async list(){
        // desc
        // asc
         const {page = 1,pageSize = 10,order = 'desc',txt=""} = this.ctx.request.query
          let selectSql = `
            SELECT * FROM article 
            WHERE title LIKE '%${txt}%'
            ORDER by addTime ${order} 
            LIMIT ${(page - 1)*pageSize},${pageSize} 
          `
          let totalSql = `
            SELECT count(*) FROM article
          `
          let data = await this.app.mysql.query(selectSql)
          let [totalCount] = await this.app.mysql.query(totalSql)

             this.ctx.body = {
                page,
                pageSize,
                totalCount:totalCount['count(*)'],
                data
             }
    }
    async deleteList(){
         let {id} =  this.ctx.params
         const result = await this.app.mysql.delete('article', {
            id,
          });
         this.ctx.body = result
    }
    async query(){
        const {id} = this.ctx.params
        const sql = `
           SELECT * FROM article
           WHERE id = '${id}'
        `
        let [result] = await this.app.mysql.query(sql)
        this.ctx.body = {
            data:result
        }
    }
    async edit(){
        const body = this.ctx.request.body
        try{
            let result = await this.app.mysql.update('article',body)
            this.ctx.body = {
                data:result,
                status:'success'
            }
        }catch(e){
            this.ctx.body = {
                data:result,
                status:'fail'
            }    
        }
    }
}

module.exports = MainController