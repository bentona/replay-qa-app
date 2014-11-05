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

exports.showUser = function(req, res){
  adapter.getDocs('users', {'_id':adapter.ObjectID(req.params.id)}, function(err, docs){
    if (err || !docs[0]) return res.redirect('/sign_in');
    res.render('user', {user: docs[0]});
  });

};

exports.editUser = function(req, res){
};

exports.authUser = function(req, res){
  adapter.getDocs('users', {email: req.query.email, password: req.query.password}, function(err, doc){
    if (err || !doc[0]) return res.redirect('/sign_up');
    res.redirect('/users/' + doc[0]._id)
  });
};

