const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router/index');


const app = new Koa();


app.use(bodyParser());
// 方法一:useRoutes(app)
app.useRoutes = useRoutes;
app.useRoutes();//this的隐式绑定
app.on('error', errorHandler);

module.exports = app;