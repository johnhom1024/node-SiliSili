// node 后端服务器

const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//设置模版引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//设置session
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongo = require('./db/connect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret:'12345',
  cookie: { maxAge:  1000 * 60  }, //设置cookied的生存周期为60s 
  
  //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
  resave: true, 
  //强制“未初始化”的会话保存到存储。 
  saveUninitialized: true, 

  store: new MongoStore({
    url: 'mongodb://127.0.0.1:27017/session'
  })
  
}));

// 后端api路由
app.use('/api/', userApi);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// catch 404 and forward to error handler


//启动mongodb数据库


mongo.connectToServer(function (err) {
  if (err) throw err;  
});



// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
