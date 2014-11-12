$(function() {
  // var $myList = $("#list");
  // for (var i = 0; i < 3; i++) {
  //   var myListItem = prompt("What is your list item?");
  //   $("#list").append("<li class='notdone'>" + myListItem + "</li>");
  // }

  $("#addTask").click(function(event) {
    event.preventDefault();
    var task = $("#task").val();
    var $listItem = $("<li class ='notdone'>" + task + "</li>");
    $listItem.click(function() {
      $(this).toggleClass("notdone done");
    });

    $("#list").append($listItem);
    document.getElementById("task").value = "";
  });


});
