//= require jquery
//= require bootstrap-sprockets
//= require_tree.

$(document).ready(function(){

  $(window).on("scroll", function(){
    if ( $(this).scrollTop() > 80 ){
      $(".navbar").css("background-color", "#555");
      } else {
          $(".navbar").css("background-color", "transparent");
          }
  });
});
