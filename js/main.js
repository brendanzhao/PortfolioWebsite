$(document).ready(function() {
  $(window).scroll(function () { 
    if ($(window).scrollTop() >= 300) {
      $('#nav').addClass('fixed');
    }
    else if ($(window).scrollTop() < 300) {
      $('#nav').removeClass('fixed');
    }
  });
});