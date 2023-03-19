const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

// 相对路径写法
// const PRIVATE_KEY = fs.readFileSync('src/app/keys/private.key');
// const PUBLIC_KEY = fs.readFileSync('src/app/keys/public.key');
// 绝对路径写法
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/public.key'));
// const { APP_PORT } = process.env;
// module.exports = {
//   APP_PORT
// };
// 注意此处步骤一和步骤二顺序不能颠倒
// 步骤一
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env;
// 步骤二
module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;