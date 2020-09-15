'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const { ctx,app } = this;
      this.ctx.body = 'hi 你好呀'
  } 
// 根据类别id获取文章列表  默认是首页
  async getArticleList(){
    let id = this.ctx.params.id
    let sql = ''
    if(id){
       sql = 'SELECT article.id as id,'+
      'article.title as title,'+
      'article.introduce as introduce,'+
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
      'article.view_count as view_count ,'+
      'type.typeName as typeName '+
      'FROM article LEFT JOIN type ON article.type_id = type.Id '+
      `WHERE type_id = ${id}`
    }else{
       sql = 'SELECT article.id as id,'+
      'article.title as title,'+
      'article.introduce as introduce,'+
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
      'article.view_count as view_count ,'+
      'type.typeName as typeName '+
      'FROM article LEFT JOIN type ON article.type_id = type.Id'
    }
      const result = await this.app.mysql.query(sql)

      this.ctx.body  = {data:result}
  }

  // 根据列表id获取文章详情
  async getArticleById(){
      let id = this.ctx.params.id
    let sql = `
    SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    article.article_content as article_content,
    article.addTime as addTime,
    article.view_count as view_count ,
    type.id as typeId 
    FROM article
    LEFT JOIN type ON article.type_id = type.Id 
    WHERE article.id='${id}';
    `
      const result =  await this.app.mysql.query(sql)
      this.ctx.body = {data:result}
  }
  // 获取类别数据
  async getTypeInfo(){
    const result =  await this.app.mysql.select('type')
    this.ctx.body = result
  }
}

module.exports = HomeController;
