// Look to localStorage for any stored activites
// If there is no item stored under the name of "day-schedule", default to an empty object
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};

// Find all elements with the class of "time-block"
$(".time-block").each(function () {
    // For each time block, execute the following code

    // Retrieve the id from the time block
    const id = $(this).attr("id");

});



// Create and format a date object
var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;


// Add a click event listener to our saveBtns
$(".saveBtn").on("click", function(event) {
    // prevent the default action of our button
    event.preventDefault();
    //retrieve the value in our textarea
    const val = $(this).siblings("textarea").eq(0).val().trim();
    // retreive the id from our parent element, which would be our time-block
    const id = $(this).parent().attr("id");
    // Store the text in our data object
    data[id] = val;
    // Store our notes in localStorage so we can retrieve them later.
    localStorage.setItem("day-schedule", JSON.stringify(data));
});