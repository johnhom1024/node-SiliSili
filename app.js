// node 后端服务器

// const user = require('./router/user');
// const admin = require('./router/admin');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
// const express = require('express');
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';

import user from './router/user';
import admin from './router/admin';

const app = express();

//设置模版引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//设置session
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);
// var mongo = require('./db/connect');
import session from 'express-session';
import connectMongo from 'connect-mongo'

const MongoStore = connectMongo(session);
// 使用session
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
app.use('/api', user);
app.use('/', admin);

//设置模版引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// catch 404 and forward to error handler



// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
