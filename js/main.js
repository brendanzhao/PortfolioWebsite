$(document).ready(function() {
  $(window).scroll(function () { 
    if ($(window).scrollTop() >= $("header").height()) {
      $('#nav').addClass('fixed');
    }
    else if ($(window).scrollTop() < $("header").height()) {
      $('#nav').removeClass('fixed');
    }
  });
});