/**
 * Created with JetBrains WebStorm.
 * User: Vlad
 * Date: 4/26/13
 * Time: 1:10 PM
 * To change this template use File | Settings | File Templates.
 */
$(function(){




    $('#send2').on('click', function(event){
        event.preventDefault();
        var userName = $('#name').val();
        var userPass = $('#pass').val();
        console.log(userName, userPass);
        $.ajax({
            type: 'POST',
            url: '/example2.json',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({user: userName, pass: userPass}),
            success: function(data){
                $('body').append("<div id='greetings'>"+data.answer+"</div>");
            },
            error: function(err){
                console.log(err);
            }
        });
    })
});