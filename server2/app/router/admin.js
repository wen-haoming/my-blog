'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
    const adminauth = app.middleware.adminauth()
    router.post('/login',controller.admin.main.checkLogin)
    router.get('/typeInfo',adminauth,controller.admin.main.getTypeInfo)
    router.post('/addArticle',adminauth,controller.admin.main.addArticle)
    router.get('/list',adminauth,controller.admin.main.list)
    router.get('/deleteList/:id',adminauth,controller.admin.main.deleteList)
    router.get('/query/:id',adminauth,controller.admin.main.query)
    router.post('/edit',adminauth,controller.admin.main.edit)
    router.get('/updateNext',adminauth,controller.admin.main.updateNext)
};


