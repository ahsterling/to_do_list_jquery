$(function() {
  // var $myList = $("#list");
  for (var i = 0; i < 3; i++) {
    var myListItem = prompt("What is your list item?");
    $("#list").append("<li class='notdone'>" + myListItem + "</li>");
  }

  $(".notdone").click(function() {
    $(this).toggleClass("done");
  });



});
