/**
 * Created with JetBrains WebStorm.
 * User: Vlad
 * Date: 4/26/13
 * Time: 12:35 PM
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users;

var model = mongoose.connect('mongodb://admin:admin@dharma.mongohq.com:10024/hellonode', function(err){
    if(err){
        throw err;
    }
    else{
        console.log('connected to database')
    }
});

/*
*
* Users Model
* */
Users = new Schema({
    name:{
        type: String,
        index: {unique: true}
    },
    pass: {type: String, index: true}
});

Users.virtual('id').get(function(){
    return this._id.toHexString();
});
Users.pre('save', function(next){
    if(this.name != "" && this.pass != ""){
        next();
    }
    else{
        next(new Error('Data is empty'));
    }
});

exports.getUsers = model.model('Users', Users);