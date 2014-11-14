$(function() {

  $(".color-selector").click(function() {
    // $(this).next.
    $(this).toggleClass("selected");
    var color = $(this).attr("id");

    if (color == "red-select") {
      $("#blue-select").removeClass("selected");
      $("#green-select").removeClass("selected");
      $("#purple-select").removeClass("selected");
    } else if (color == "blue-select") {
      $("#red-select").removeClass("selected");
      $("#green-select").removeClass("selected");
      $("#purple-select").removeClass("selected");
    } else if (color == "green-select") {
      $("#red-select").removeClass("selected");
      $("#blue-select").removeClass("selected");
      $("#purple-select").removeClass("selected");
    } else if (color == "purple-select") {
      $("#red-select").removeClass("selected");
      $("#green-select").removeClass("selected");
      $("#blue-select").removeClass("selected");
    }
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

  $("#clear-tasks").click(function() {
    $("#list").empty();
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
      // checkDone();
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
