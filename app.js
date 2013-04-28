
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path'),
    example1 = require('./routes/example1'),
    exapmle2 = require('./routes/example2'),
    db = require('./routes/models');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/example1', example1.get);
app.post('/example1', example1.post);
app.get('/example2.:format?', loadUser, exapmle2.get);
app.post('/example2.:format?', exapmle2.post);

function loadUser(req, res, next){
    var Users = db.getUsers;
    Users.findOne({name: 'test'}, function(err, data){
        if(data){
            next();
        }
        else{
            res.redirect('example1');
        }
    })
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
