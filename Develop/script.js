// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Added a listener for click events on the save button. Uses the id of the
  // containing time-block as a key to save the user input in
  // local storage. 
  $(".saveBtn").on("click", function () {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
  })
  // Applies the past, present, or future class to each time
  // block by comparing the id to the current hour.
  var hour = dayjs().hour();
  $(".time-block").each(function () {
    var divNumber = $(this).attr("id");
    if (divNumber < hour) {
      $(this).addClass("past");
    }
    else if (divNumber == hour) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("future");
    }
  })
  // Gets user input that was saved in localStorage and sets
  // the values of the corresponding textarea elements.
  $("#9 textarea").val(localStorage.getItem("9"));
  $("#10 textarea").val(localStorage.getItem("10"));
  $("#11 textarea").val(localStorage.getItem("11"));
  $("#12 textarea").val(localStorage.getItem("12"));
  $("#13 textarea").val(localStorage.getItem("13"));
  $("#14 textarea").val(localStorage.getItem("14"));
  $("#15 textarea").val(localStorage.getItem("15"));
  $("#16 textarea").val(localStorage.getItem("16"));
  $("#17 textarea").val(localStorage.getItem("17"));
  $("#18 textarea").val(localStorage.getItem("18"));

  // Function displays the current date in the header of the page.
  var currentDay = dayjs().format('dddd, MMMM D');
  $("#currentDay").text(currentDay);
})
