$(function() {

  $("#addTask").click(function(event) {
    event.preventDefault();
    var task = $("#task").val();
    var $listItem = $("<li class ='notdone'><div class = 'checkbox'></div>" + task + "</li>");
    $listItem.click(function() {
      $(this).toggleClass("notdone done");
      
      checkDone();
    });

    $("#list").append($listItem);
    document.getElementById("task").value = "";

  });


  function checkDone() {
    var $doneList = $("#list").children(".done");
    console.log("Completed tasks: " + $doneList.length);
    var $tasksList = $("#list").children();
    console.log("all tasks: " + $tasksList.length);
    if ($doneList.length == $tasksList.length) {
      if (confirm("Do you want to clear all the list items?")) {
        $("#list").empty();
      }
    }
  }

});
