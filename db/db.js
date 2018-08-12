var mongoose = require('mongoose');
var mongo = require('./setting');

//连接数据库
mongoose.connect(mongo.url,{useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {
  // we're connected!
  console.log("连接成功");
  
});




export default db;
