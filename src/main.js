const app = require('./app');
require('./app/database');

const config = require('./app/config');

app.listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}端口启动成功`);
})

// 路径  中间件处理的 映射

module.exports = app;