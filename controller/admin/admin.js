
class Admin {
  login(req, res, next){
    res.render('admin');
  }
}


export default new Admin();