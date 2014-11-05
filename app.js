var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var routes      = require('./routes');
var userRoutes  = require('./user_routes');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', routes.index);
app.get('/sign_in', routes.signIn);
app.get('/sign_up', routes.signUp);
app.get('/auth', userRoutes.authUser);

app.get('/list', userRoutes.listUsers);
app.get('/users/:id', userRoutes.showUser);
app.get('/users/:id/edit', userRoutes.editUser);
app.post('/create_user', userRoutes.createUser);
app.post('/users/:id/update', userRoutes.updateUser);

app.listen(3000);
