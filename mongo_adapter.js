var mongodb     = require('mongodb');
var MongoClient = mongodb.MongoClient;

function MongoAdapter(){
  this.dbURL = 'mongodb://localhost:27017';
  this.db = null;
}

MongoAdapter.prototype.setUp = function(){
  var _this = this;
  MongoClient.connect(this.dbURL, function(err, db){
    if (err) return console.error(err);
    _this.db = db;
  });
};

MongoAdapter.prototype.getCollection = function(collectionName, callback){
 return this.db.collection(collectionName, callback);
};

MongoAdapter.prototype.insertDoc = function(collectionName, doc, callback){
  this.getCollection(collectionName, function(err, collection){
    if (err) return callback(err);
    collection.insert(doc, callback);
  });
};

MongoAdapter.prototype.getDocs = function(collectionName, query, callback){
  this.getCollection(collectionName, function(err, collection){
    if (err) return callback(err);
    collection.find(query).toArray(function(err, docs){
      if (err) return callback(err);
      return callback(null, docs);
    })
  });
};

module.exports = MongoAdapter;
