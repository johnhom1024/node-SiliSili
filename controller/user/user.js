import userModel from '../../models/user/user';
import crypto from 'crypto';


class User {
  constructor(){
    this.register = this.register.bind(this);
  }
 
  
   MD5(password){
      const md5 = crypto.createHash('md5');
      return md5.update(password).digest('hex');
  }


  async register(req, res) {

    
    
    // 用户注册功能
    //1. 接收传递过来的用户注册信息
    //2. 查看数据库中是否存在与该用户的账号相同的账号
    //3. 不存在的情况下，则为用户的对象信息中插入创建的时间信息
    //4. 用户的权限如何处理？1：普通用户 2：管理员 3:站长
    //5. 将密码进行MD5加密后再插入数据表中
    
    const user_name = req.body.user_name; //post请求中的user_name
    const password = req.body.password;
    
    
    //查看数据库中是否存在相同账号
    
    try 
    {
      const user = await userModel.findOne({user_name});
      if (user) {
        console.log("已存在该用户");
        res.send({
          status: 0,
          type: 'USER_HAS_EXIST',
          message: '该用户已经存在',
        })
        
      }else{
        //对密码加密
        const newpassword = this.MD5(password);
        //新建用户对象
        const newUser = {
          user_name,
          password: newpassword,
          status: 1
        }
        await userModel.create(newUser)
        res.send({
          status: 1,
          message: '注册用户成功',
        })
        console.log("注册用户成功");
        
      }
    } catch (err) 
    {
      console.log('发生未知错误', err);
      res.send({
        status: 0,
        type: 'LOGIN_ADMIN_FAILED',
        message: '发生未知错误',
      })
      
    }
    
    
    
    
  }
  //加密密码
  // MD5(password){
  //   const md5 = crypto.createHash('md5');
  //   return md5.update(password).digest('hex');
  // }


}

export default new User();