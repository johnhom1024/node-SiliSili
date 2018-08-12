var mongo = require('../connect');
var mongodb = require('../setting');
var crypto = require('crypto');

var md5 = crypto.createHash('md5');
//用户的注册登陆功能

module.exports = {

  //用户注册功能
  //1. 接收传递过来的用户注册信息
  //2. 查看数据库中是否存在与该用户的账号相同的账号
  //3. 不存在的情况下，则为用户的对象信息中插入创建的时间信息
  //4. 用户的权限如何处理？1：普通用户 2：管理员 3:站长
  //5. 将密码进行MD5加密后再插入数据表中

  register: function (data, callback) {
    var mydb = mongo.getDb().db(mongodb.userdb);
    var mycollection = mydb.collection(mongodb.userdb);

    //查询用户名是否已存在
    mycollection.find(
      {'uname':data.uname}).toArray(function (err, result) {
        if (err) {
          callback(false);
        }
        //查询不为空时，不可以可以注册账号
        if (result.length) {
          callback(false);
        }

        //加密密码
        data.pwd = md5.update(data.pwd).digest('hex');


        //生成时间戳并添加到data对象里
        data.create_at = Date.now();
        
        //用户的权限首先设置为1
        data.status = 1;

        console.log(data);
        
        

        //插入data
        mycollection.insertOne(data, function (err, result1) {
          if (err) callback(false);

          callback(true);
        })

      })


  }



}