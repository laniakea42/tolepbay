$(document).ready(function(){
  $('.arr').on('click', function(){
    $(this).siblings('ul').slideToggle();
    $(this).toggleClass('open');
    event.preventDefault();
  });

  $('.index-slick').slick({
    dots: true
  });

  $('[data-modal]').on('click', function(){
    var modal = $(this).attr('data-modal');
    $(modal).fadeIn();
  });

  $('.modal .close, .modal .modal-layer').on('click', function(){
    $(this).parents('.modal').fadeOut();
  });

  $('#masked').mask('+7 (999) 999-99-99');

  
  $('.icon-hamburger').on('click', function(){
    if (!$('.dropdown-menu').is(':visible')) {
      $('.dropdown-menu').slideDown();
      $(this).addClass('open');
    }
     else {
      $('.dropdown-menu').slideUp();
      $(this).removeClass('open');
    }
  });

  $('.dropdown-menu a').on('click', function(){
     $('.dropdown-menu').slideUp(800);
     $('.icon-hamburger').removeClass('open');
  });

})