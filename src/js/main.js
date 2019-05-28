$(document).ready(function () {
    $('.menu-mobile').click(function () {
        $('.menu-desc').toggleClass('menu-desc_active')
    })
    $('.scan-left').click(function () {
        $('.scan').addClass('scan-active');
    })
    $('.scan-close').click(function () {
        $('.scan').removeClass('scan-active');
    })
    $('.sub-item').click(function () {
        $('.sub-item').removeClass('sub-item_active');
        $(this).addClass('sub-item_active');
    })
    /*
    $('.filter-i_1').click(function () {
        $('.section_2-wrap').load('build/html/cards.html .green')
    })
    $('.filter-i_5').click(function () {
        $('.section_2-wrap').load('build/html/cards.html .violet')
    })
    $('.filter-i_4').click(function () {
        $('.section_2-wrap').load('build/html/cards.html .yellow')
    })
    $('.filter-i_3, .filter-i_2').click(function () {
        $('.section_2-wrap').load('build/html/cards.html')
    })
    */
    var id;
    var cards = $('.cards, .cardl');
    var cardsGreen = $('.green');
    var cardsYellow = $('.yellow');
    var cardsviolet = $('.violet');
    $('.filter-i').click(function () {
        id = $(this).attr('id');
        if (id == 'green') {
            cards.css('display', 'none');
            cardsGreen.css('display', 'block');
        }
        else if (id == 'yellow') {
            cards.css('display', 'none');
            cardsYellow.css('display', 'block');
        }
        else if (id == 'violet') {
            cards.css('display', 'none');
            cardsviolet.css('display', 'block');
        }
        else{
            cards.css('display', 'block');
        }
    })
    $('.map-btn').click(function () {
        $('.map').css('display', 'block');
        if ($('.foots-select option:selected').val() == 'Dubai') {
            $('.iframe_1').css('display', 'block')
        }
        else if ($('.foots-select option:selected').val() == 'Egypt') {
            $('.iframe_2').css('display', 'block')
        }
    })
    $('.map-close').click(function () {
       
        $('.map').fadeOut();
        $('.iframe').fadeOut();
    })
   
    $('.form-btn').click(function () {
        event.preventDefault();
        var email = $('.form-inp').val
        var jqxhr = $.get('build/php/subscriber.php', { 'email': email });

        jqxhr.done(function (data) {
            if (true) {
                $('.form').fadeOut(function () {
                    $('.foot-title').css('display', 'none');
                    $('.form-over').css('display', 'block');
                    $('.form-over-email').html(data);
                    console.log(data);
                })
            }
        })
        jqxhr.fail(function (xhr, status, errorThrown) {
           alert(status + errorThrown);
        })
    })

    $(window).resize(function () {
        if ($(window).width() > 850) {
            $('.iframe').css({'width': '800', 'height': '600'});
        }
        else if ($(window).width() < 850) {
            $('.iframe').css({ 'width': '600', 'height': '450' });
        }
    });
    $('.log').click(function () {
        $('.enter').css('display', 'block');
    })
    $('.enter-exit').click(function () {
        $('.enter').css('display', 'none');
    })

    $('.enter-btn').click(function () {
        event.preventDefault();
        var name = $('.enter-name').val
        var pass = $('.enter-pass').val
        var jqxhr = $.get('build/php/sign.php');

        jqxhr.done(function (data) {
           
            if (true) {
                $('.enter-form').fadeOut(function () {
              })
            }
        })
        jqxhr.fail(function (xhr, status, errorThrown) {
            alert(status + errorThrown);
        })
    })
    

    
    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
        console.log('msie') // Ie
        $('.menu, .menu-desc, .login').css('height', '75px');
        $('.logo').css('margin-top', '15px');
        $(window).resize(function () {
            if ($(window).width() < 559) {
                $('.menu').css('height', '50px');
                $('.menu-desc').css('top', '125px');
            }
            else {
                $('.menu').css('height', '75px');
                $('.menu-desc').css('top', '75px');
            }
            if ($(window).width() < 976) {
                $('.menu-desc').css('height', 'auto');
            }
            else {
                $('.menu-desc').css('height', '75px');
            }
        });
        
        $('.scan').css('justify-content', 'flex-start');
        $('.scan-inf').css('margin', '0 auto');

        $('.sub').css('box-sizing', 'border-box');
        $('.sub').css('max-width', '100%');
       // $('.sub').css('flex', '0 1 auto');
        

        if ($(window).width() < 768) {
            $('.sub').css('flex', '0 1 auto');
        }

        $(window).resize(function () {
            if ($(window).width() < 768) {
                $('.sub').css('flex', '0 1 auto');
            }
            else {
                $('.sub').css('flex', '0 0 0');
            }
        })


    } 
    else if (navigator.userAgent.match(/firefox/i)) { 
        console.log('firefox') // gecko = firefox
    }
    else if (navigator.userAgent.match(/chrome/i)) {
        console.log('Chrome and Opera') // Chrome and Opera(webkit)
    }
    else if (navigator.userAgent.match(/safari/i)) {
        console.log('Safary') // Safary (and Opera)
    }



   
        var stars;
        var num;
        $(".star-i").on('mouseover', function (event) {
            stars = $(this).parent().children('.star-i');
            var that = this;
            stars.each(function (index, item) {
                if (item == that) {
                    $(item).addClass('star-i-hover');
                    num = index;
                    return false;
                }
                else {
                    $(item).addClass('star-i-hover');
                }
            })
        }).mouseout(function () {
            $(stars).removeClass('star-i-hover');
        })
        $(".star-i").on('click', function (e) {
            var that = this;
            stars.each(function (index, item) {
                if (item == that) {
                    //if (index == num) {
                    $(item).removeClass('star-i-hover');
                    $(item).addClass('star-i-selected');
                    return false;
                }
                else {
                    $(item).removeClass('star-i-hover');
                    $(item).addClass('star-i-selected');
                }
            })
            $(this).parent().children('.star-i').unbind();

            var posX = e.clientX;
            var posY = e.clientY;
            var descText;

            if ($(this).parent().hasClass('cardl-text-wrap-star')) {
                descText = $(this).parent().parent().parent().parent().attr('data-name');
            }
            else {
                descText = $(this).parent().parent().attr('data-name');
            }

            $(this).parent().parent().children('.stars-desc').css('left', posX - 130);
            $(this).parent().parent().children('.stars-desc').css('top', posY + 30);
            $(this).parent().parent().children('.stars-desc').css('display', 'block');

            $(this).parent().parent().children('.stars-desc').html(`Name: ${descText},<br /> stars: ${num + 1}`);
            $(this).parent().parent().children('.stars-desc').fadeOut(2000);
            
            })

    
    var typed2 = new Typed('#typed', {
        strings: ['What', 'What are you', 'What are you looking for?'],
        typeSpeed: 90,
        backSpeed: 0,
        backDelay: 2500,
        fadeOut: true,
        loop: true
    });

    



   


})








/*
    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
        console.log('msie') //Ie
    }
    else if (navigator.userAgent.match(/firefox/i)) { // gecko = firefox
        console.log('firefox')
    }
    else if (navigator.userAgent.match(/chrome/i)) {
        console.log('Chrome and Opera') //Chrome and Opera(webkit)
    }
    else if (navigator.userAgent.match(/safari/i)) {
        console.log('Safary') //Safary and Opera
    }

*/