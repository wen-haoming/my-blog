## 博客技术架构图

<br />**Nginx**: 转发静态页面请求和代理nextjs服务。<br />**阿里云cdn**： 用户获取静态资源必须需要的。<br />**front-blog**：博客文章展示，使用nextjs实现ssr，特点是全局静态化。<br />**front-back**: 博客文章管理后台，使用umi，特点是工具完善开发方便快捷。<br />**eggjs**: 博客系统后台，基于强大koa的扩展, 有着优秀性能和后置处理能力。<br />database: 存储博客数据。 <br />![未命名.001.png](https://cdn.nlark.com/yuque/0/2020/png/276215/1600662927837-0f4bb034-0008-4cd7-a3b7-d4b25f06c232.png)<br />最后的成本效果是 [http://whm.zone](http://whm.zone)<br />
