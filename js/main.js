$(document).ready(function() {
  $(window).scroll(function () { 
    if ($(window).scrollTop() >= 400) {
      $('#nav').addClass('fixed');
    }
    else if ($(window).scrollTop() < 400) {
      $('#nav').removeClass('fixed');
    }
  });
});