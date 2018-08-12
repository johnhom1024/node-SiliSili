var express = require('express');
var router = express.Router();
var user = require('../db/model/user');

router.get('/',function (req, res) {
  res.render('admin');
})

router.get('/user',function (req, res) {
  console.log(req.query);
  res.send('hello');
  
})


//注册
router.post('/register',function (req, res) {
  console.log(req.body);

  user.register(req.body,function (result) {
    console.log(result);
    res.send(result);
  })
})


module.exports = router;