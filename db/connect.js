var setting = require('./setting');


var MongoClient = require('mongodb').MongoClient;

var url = setting.url;
var dbName  = setting.db;

var _db;

module.exports = {

  connectToServer: function (callback) {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    _db = db;
    return callback(err);
      
    });
  },

  getDb:function (){
      return _db;
  }
  
};