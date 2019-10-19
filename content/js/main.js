$(function () {

    AOS.init({
        once: true
    });

    //Header
    $('[data-trigger]').on('click', function () {
        $(this).parents('.l-container').toggleClass('is-active');
    });

    var query = Modernizr.mq('(max-width: 767px)');
    if (query) {
        $('.l-menu li').on('click', 'a', function () {
            $(this).parents('.l-container').removeClass('is-active');
        })
    }

});