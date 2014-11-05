var MongoAdapter = require('./mongo_adapter');
var parseUserDoc = require('./user');

var adapter = new MongoAdapter();

adapter.setUp();

exports.createUser = function(req, res){
  adapter.insertDoc('users',parseUserDoc(req), function(err, record){
    if (err) return res.redirect('/sign_up');
    res.redirect('/');
  });
};

exports.listUsers = function(req, res){
  adapter.getDocs('users', {}, function(err, docs){
    if (err) res.redirect('/')
    res.end(JSON.stringify(docs));
  });
};

exports.showUser = function(req, res){
  adapter.getDocs('users', {
    '_id':adapter.ObjectID(req.params.id)
  }, function(err, docs){
    if (err || !docs[0]) return res.redirect('/sign_in');
    res.render('user', {user: docs[0]});
  });
};

exports.editUser = function(req, res){
  adapter.getDocs('users', {
    '_id':adapter.ObjectID(req.params.id)
  }, function(err, docs){
    if (err || !docs[0]) return res.redirect('/sign_in');
    res.render('edit_user', {user: docs[0]});
  });
};

exports.updateUser = function(req, res){
  var id = req.params.id;
  adapter.updateDoc('users', {
    '_id': adapter.ObjectID(id)
  }, {$set: parseUserDoc(req)}, function(err, doc){
    if (err) return res.redirect('/users/'+id+'/edit')
    res.redirect('/users/'+id);
  });
};

exports.authUser = function(req, res){
  adapter.getDocs('users', {
    email: req.query.email,
    password: req.query.password
  }, function(err, doc){
    if (err || !doc[0]) return res.redirect('/sign_up');
    res.redirect('/users/' + doc[0]._id)
  });
};

