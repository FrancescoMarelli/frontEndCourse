$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 1500 + (index * 200));
    });


    if( $(window).width() > 800 ){
        $('header .title').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .title').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    // Scroll
    var about = $('#acerca-de').offset().top,
        menu = $('#plates').offset().top,
        gallery = $('#galeria').offset().top,
        location = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about - 100
        }, 100);
    }
    );
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu - 100
        }, 100);
    }
    );
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: gallery - 100
        }, 100);
    }
    );
    $('#btn-donde').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: location - 100
        }, 100);
    }
    );



});