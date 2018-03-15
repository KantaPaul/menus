function name() {
    if ($(window).width() > 991) {
        $('.menus').addClass('landscape');
        $('.menus').removeClass('potrait');
    } else {
        $('.menus').addClass('potrait');
        $('.menus').removeClass('landscape');
    }
}

$(window).resize(function() {
    name();
});

$(window).on('load', function() {
    name();
});

$(document).ready(function() {
    

    // for(var i = 3; i < menuItemLength.length; i.length++) {
    //     menuItemLength.slice(i, i.length).wrapAll("<li class='new icons'><ul></ul></li>");
    // }

    var menuItemLength = $('.menus > li');

    for (var i = 3; i < menuItemLength.length; i += menuItemLength.length) {
        if (i < menuItemLength.length) {
            menuItemLength.slice(i, i + menuItemLength.length).wrapAll("<li class='new icons'><ul></ul></li>");
        }
    }
})