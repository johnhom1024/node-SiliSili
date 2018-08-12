// var express = require('express');
// var router = express.Router();
// var user = require('../db/model/user');

import express from 'express';
import User from ''
const router = express.Router();

// router.get('/user',function (req, res) {
//   console.log(req.query);
//   res.send('hello');
  
// })


//注册
router.post('/register',function (req, res) {
  console.log(req.body);

  user.register(req.body,function (result) {
    console.log(result);
    res.send(result);
  })
})


module.exports = router;