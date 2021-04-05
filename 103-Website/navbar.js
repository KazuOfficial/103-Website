$(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        if (!$('header').hasClass('expand')) {
            $('header').addClass('expand');
        }
    } else {
        if ($('header').hasClass('expand')) {
            $('header').removeClass('expand');
        }
    }
});
