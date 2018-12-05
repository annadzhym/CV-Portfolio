'use strict';
(function ($) {
    window.onscroll = function() {makeHeader()};

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
