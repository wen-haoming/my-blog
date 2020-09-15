'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getArticleList', controller.default.home.getArticleList);
  router.get('/getArticleList/:id', controller.default.home.getArticleList);
  router.get('/getArticleById/:id', controller.default.home.getArticleById);
  router.get('/getTypeInfo', controller.default.home.getTypeInfo);
};
