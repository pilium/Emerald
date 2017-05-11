
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
    });
    $('.js-reviews-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '.reviews-slider__prev',
        nextArrow: '.reviews-slider__next',
        responsive: [
    {
        breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
  ]

    });
});
