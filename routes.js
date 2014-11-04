exports.index = function(req, res){
  res.sendFile('index.html', {root: __dirname});
};

exports.signIn = function(req, res){
  res.render('sign_in');
};

exports.signUp = function(req, res){
  res.render('sign_up');
};
