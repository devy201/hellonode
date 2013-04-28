/**
 * Created with JetBrains WebStorm.
 * User: Vlad
 * Date: 4/26/13
 * Time: 1:19 PM
 * To change this template use File | Settings | File Templates.
 */
exports.get = function(req, res){
    res.render('example2', {title: 'Example #2'});
};

exports.post = function(req, res){
    /*res.render('example2', {title: 'Example #2'});*/

    switch (req.params.format){
        case 'json':
            console.log(req.body);
            res.send({'answer': 'Welcome '+req.body.user+'!'});
            break;
        case 'html':
            res.redirect('/');
            break;
        default:
            res.redirect('/');
    }
};