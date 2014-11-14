$(function() {

  $(".color-selector").click(function() {
    $(this).toggleClass("selected");
  });

  $("#red-filter").click(function() {
    $(".red").show();
    $(".blue").hide();
    $(".green").hide();
    $(".purple").hide();
  });

  $("#blue-filter").click(function() {
    $(".blue").show();
    $(".red").hide();
    $(".green").hide();
    $(".purple").hide();
  });

  $("#green-filter").click(function() {
    $(".green").show();
    $(".red").hide();
    $(".blue").hide();
    $(".purple").hide();
  });

  $("#purple-filter").click(function() {
    $(".purple").show();
    $(".red").hide();
    $(".blue").hide();
    $(".green").hide();
  });

  $("#all-filter").click(function() {
    $(".purple").show();
    $(".red").show();
    $(".blue").show();
    $(".green").show();
  });

  $("#addTask").click(function(event) {
    event.preventDefault();
    var task = $("#task").val();
    var $listItem = $("<li class ='notdone'><div class = 'checkbox'></div>" + task + "</li>");
    // var color = "red";
    // if ($(".selected").typeOf == undefined ) {
    //   color = $(".selected").get(0).getAttribute("value");
    // }
    var color = $(".selected").get(0).getAttribute("value");
    $listItem.addClass(color);
    $("ul").sortable();

    $listItem.click(function() {
      $(this).toggleClass("notdone done");
      checkDone();
    });

    $("#list").append($listItem.fadeIn("400"));
    document.getElementById("task").value = "";
    $(".color-selector").removeClass("selected");


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
});
