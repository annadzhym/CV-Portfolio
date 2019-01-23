'use strict';
(function ($) {
    window.onscroll = function() {
        makeHeader();
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    };
    $('.scrollup').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
    });

    var header = document.querySelector("header");
    var sticky = header.offsetTop;

    function makeHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };

    $('.js-scroll').click(function (e) {
        e.preventDefault();
        $('.js-scroll').removeClass('header__link--active');
        this.classList.add('header__link--active');
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000)
    });

})(jQuery);
