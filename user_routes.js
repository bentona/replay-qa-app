var MongoAdapter = require('./mongo_adapter');
var parseUserDoc = require('./user');

var adapter = new MongoAdapter();

adapter.setUp();

exports.createUser = function(req, res){
  adapter.insertDoc('users',parseUserDoc(req), function(err, record){
    if (err) return res.redirect('sign_up');
    console.log(record);
    res.sendFile('index.html', {root: __dirname});
  });
};

exports.listUsers = function(req, res){
  adapter.getDocs('users', {}, function(err, docs){
    if (err) console.error(err);
    res.end(JSON.stringify(docs));
  });
};

exports.authUser = function(req, res){
  adapter.getDocs('users', {email: req.body.email, password: req.body.password}, function(err, docs){
    if (err || docs) console.error(err);
    res.end(JSON.stringify(docs));
  });
};

