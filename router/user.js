// var express = require('express');
// var router = express.Router();
// var user = require('../db/model/user');

import express from 'express';
import User from '../controller/user/user';
const router = express.Router();

// router.get('/user',function (req, res) {
//   console.log(req.query);
//   res.send('hello');
  
// })


//注册
router.post('/register', User.register);


module.exports = router;