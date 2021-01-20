(function ($) {
    "use strict";


    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // // Hamburger-menu
        // $('.hamburger-menu').on('click', function () {
        //     $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
        //     $('.hamburger-menu .line-center').toggleClass('current');
        //     $('.hamburger-menu .line-bottom').toggleClass('current');
        // });

        $('.hamburger-menu').on('click', function(){
            $('.menu').toggleClass('current');
        })

    });
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            navText: ['<div class="left"><i class="fas fa-arrow-left"></i></div>','<div class="right"><i class="fas fa-arrow-right"></i></div>'],
            responsive:{
                0:{
                    items:1
                },
                676:{
                    items:2
                },
                991:{
                    items:3
                },
            }
        })

    
      });
})(jQuery);