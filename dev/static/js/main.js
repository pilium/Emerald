// Начинать писать отсюда!!!!
$(document).ready(function() {
  $('.header-nav').click(function() {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]

  });
  $('.js-price-item__wrap').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeught: true,
    prevArrow: '.price-slider__prev',
    nextArrow: '.price-slider__next',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeught: true
        }
      }
    ]

  });
});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function(event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length
      ? target
      : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        }
      });
    }
  }
});

$('form').on('submit', function() {
  var formID = '#' + $(this).attr('id');
  $(formID).validate({
    rules: {
      name: 'required',
      phone: 'required'
    },
    messages: {
      name: 'Введите корректные данные',
      phone: 'Введите корректный номер телефона'
    }
  });
  if ($(formID).valid()) {
    $(this).hide();
    $(this).parent().find('.success-form').addClass('success-show');
  }
  return false;
});

$('.popup-link').magnificPopup({type: 'inline'});

$('#close-popup').on('click', function() {
  $.magnificPopup.close();
});
