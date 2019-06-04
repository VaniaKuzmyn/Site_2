"use strict";

$(document).ready(function () {
    $("#form_subscribe").on("submit", function (event) {
        event.preventDefault();

        var email = $('.form-inp').val();

        var jqxhr = $.get('build/php/subscriber.php', { 'email': email });
       
            jqxhr.done(function (data) {
                $("#form_subscribe").fadeOut( "slow", function() {
                    $('.form-over-email').html(data);
                    $('.form-over').css('display', 'block');
                  });
            });
            jqxhr.fail(function (xhr, status, errorThrown) {
               alert(status + errorThrown);
            });
        
        
    });

    $("#enter-form").on("submit", function (event) {
        event.preventDefault();

        var name = $('.enter-name').val();
        var pass = $('.enter-pass').val();

        var jqxhr = $.get('build/php/sign.php', {'name': name, 'pass': pass});

        jqxhr.done(function (data) {
            $(".enter-form").fadeOut( "slow", function() {
                $('.enter-over-name').html(data);
                $('.enter-over').css('display', 'block');
                $(".enter-over").fadeOut(4000);
              });
        })
        jqxhr.fail(function (xhr, status, errorThrown) {
            alert(status + errorThrown);
        })
    })

    
})
