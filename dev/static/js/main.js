;
// Начинать писать отсюда!!!!
$(document).ready(function(){
    $('.header-nav').click(function(){
        var menu = $('.header-nav__list');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown();
        }
    })
});
