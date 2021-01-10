$(function() {


    $('.navbar li a').click(function(e) {
        e.preventDefault();
        
        $('html,body').animate({

           scrollTop: $('#'+$(this).data('scroll')).offset().top - $('nav').innerHeight()

        },1000)


    });



});