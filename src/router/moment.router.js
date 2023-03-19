const Router = require('koa-router');

const momentRouter = new Router({prefix:'/moment'});

const {
  create,
  detail,
  list
} = require('../controller/moment.controller.js');

const {
  verifyAuth
} = require('../middleware/auth.middleware');

// 插入
momentRouter.post('/', verifyAuth, create);
// 获取多条
momentRouter.get('/', list);
// 获取单条
momentRouter.get('/:momentId', detail);

module.exports = momentRouter;