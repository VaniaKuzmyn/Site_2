"use strict";

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

    
    

    
    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i)) {
        console.log('msie') // Ie
        $('.menu, .menu-desc, .login').css('height', '75px');
        $('.logo').css('margin-top', '15px');
        $(window).resize(function () {
            /*if ($(window).width() < 559) {
                $('.menu').css('height', '50px');
                $('.menu-desc').css('top', '125px');
            }
            else {
                $('.menu').css('height', '75px');
                $('.menu-desc').css('top', '75px');
            }*/
            /*if ($(window).width() < 976) {
                $('.menu-desc').css('height', 'auto');
            }
            else {
                $('.menu-desc').css('height', '75px');
            }*/
            if ($(window).width() < 768) {
                $('.sub').css('flex', '0 1 auto');
            }
            else {
                $('.sub').css('flex', '0 0 0');
            }
            if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
                /*
                if ($(window).width() < 800) {
                    $('.offer-text-item').css('margin', '0 auto')
                    $('.offer-text').css('display', 'block');
                } else{
                    $('.offer-text').css('display', 'flex');
                }
                */
            }
            
        });
        
        //$('.scan').css('justify-content', 'flex-start');
        //$('.scan-inf').css('margin', '0 auto');

        //$('.sub').css('box-sizing', 'border-box');
        //$('.sub').css('max-width', '100%');

        
        if ($(window).width() < 768) {
            $('.sub').css('flex', '0 1 auto');
        }
        
        if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
            console.log('ie10');
            //$('.offer-text').css('text-align', 'center');
            //$('.offer-icons-i').css('text-align', 'center');
            //$('.scan-left').css('margin-right', 'auto')
            //$('.scan-close').css('margin-left', 'auto')
            $('.scan-inf').css('opacity', '0')
            $('.scan-inf').css('transition', 'all 1s')

            $('.scan-left').click(function () {
                $('.scan-inf').css('opacity', '1')
            })

            $('.scan-close').click(function () {
                $('.scan-inf').css('opacity', '0')
            })
            
            //$('.log').css('transform','translateX(1px)');
            //$('.offer-text-item').css('display','block');
            //$('.offer-text-item-desc').css('margin-top','15px');
            /*if ($(window).width() < 800) {
                $('.offer-text-item').css('margin', '0 auto')
                $('.offer-text').css('display', 'block');
            } else{
                $('.offer-text').css('display', 'flex');
            }*/
            
        }
    } else if (navigator.userAgent.match(/firefox/i)) { 
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
        $(".star-i").on('mouseenter', function (event) {
            stars = $(this).parent().children('.star-i');
            stars.each((index, item) => {
                if (item == this) {
                    $(item).addClass('star-i-hover');
                    return false;
                }
                else {
                    $(item).addClass('star-i-hover');
                }
            })
        }).mouseout(function () {
            $(stars).removeClass('star-i-hover');
        })
        /*let that = $(this);
            for(let q = 0; q<stars.length; q++){
                if (stars[q] == $(that)[0]) {
                    $(stars).eq(q).addClass('star-i-hover');
                    return false;
                }
                else {
                    $(stars).eq(q).addClass('star-i-hover');
                }
            }*/
        $(".star-i").on('click', function (e) {
            stars.each((index, item) => {
                if (item == this) {
                    $(item).removeClass('star-i-hover');
                    $(item).addClass('star-i-selected');
                    num = index;
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
            var cardParent = $(this).parent().parent();

            if ($(this).parent().hasClass('cardl-text-wrap-star')) {
                descText = cardParent.parent().parent().attr('data-name');
            }
            else {
                descText = cardParent.attr('data-name');
            }

            cardParent.children('.stars-desc').css('left', posX - 130);
            cardParent.children('.stars-desc').css('top', posY + 30);
            cardParent.children('.stars-desc').css('display', 'block');

            cardParent.children('.stars-desc').html(`Name: ${descText},<br /> stars: ${num + 1}`);
            cardParent.children('.stars-desc').fadeOut(2000);
            
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

