$(document).ready(function() {
  $(window).scroll(function () { 
    if ($(window).scrollTop() >= $("header").height()) {
      $("#nav").addClass("fixed");
      $("#nav-sticky").css("height", $("#nav").css("height"));
    }
    else if ($(window).scrollTop() < $("header").height()) {
      $("#nav").removeClass("fixed");
      $("#nav-sticky").css("height", "0");
    }
  });
});