/**
 * Created with JetBrains WebStorm.
 * User: Vlad
 * Date: 4/26/13
 * Time: 11:54 AM
 * To change this template use File | Settings | File Templates.
 */

var db = require('./models');
exports.get = function(req, res){
    res.render('example1', {title: 'Example page', link: 'Go next'});
};

exports.post = function(req, res){
    //with saving to database

    var Users = db.getUsers;
    var newUser = new Users({name: req.body.name, pass: req.body.pass});
    newUser.save(function(err){
        if(!err){
            res.render('example1-result', {title: 'Example1 result', name: req.body.name, pass: req.body.pass, link: 'Go back'});
        }
        else{
            res.render('example1', {title: 'Empty data', link: 'Go next'})
        }
    });

    //without saving to database
    //res.render('example1-result', {title: 'Example1 result', name: req.body.name, pass: req.body.pass});
};
