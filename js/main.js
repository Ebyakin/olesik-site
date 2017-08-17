$(document).ready(function() {
     if($(window).width() > 768) {
         $(".top-img").attr("src", "../img/main.png");
     } else {
         $(".top-img").attr("src", "../img/main.jpg");
     }
});
