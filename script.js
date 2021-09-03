setInterval(function () {
    // Date -> Class -> Function Constructor
    const date = new Date();
    // get month
    const month = date.getMonth() + 1;
    // get the day (date)
    const day = date.getDate();
    // get year
    const year = date.getFullYear();
    // hour
    var hour = date.getHours();
    if (hour > 12) { hour -= 12 }
    // minute
    var minutes = date.getMinutes();
    if (minutes < 10) { minutes = `0` + `${minutes}` }
    // seconds
    var seconds = date.getSeconds();
    if (seconds < 10) { seconds = `0` + `${seconds}` }

    const formattedTime = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
    $("#currentDay").text(formattedTime);
}, 1000);
let appointments = document.querySelector("textarea");
let data = JSON.parse(localStorage.getItem("day-schedule")) || {};
const date = new Date();
// Add a click event listener to our saveBtns

// Find all elements with the class of "time-block"
$(".time-block").each(function (Date) {
    // For each time block, execute the following code
    // Retrieve the id from the time block
    const id = $(this).attr("id");
    const hour = id.split("-").pop();
    date.getHours();
    
    if (hour === date.getHours()) {
        //  document.querySelector(".row").style.backgroundColor = "cream";
        $("textarea").addClass("bg-secondary text-white");
        
    } else if (hour > date.getHours()){
        //  document.querySelector(".row").style.backgroundColor = "red";
        $("textarea").addClass("bg-warning text-white");
        
    } else {
        // document.querySelector(".row").style.backgroundColor = "green"
        $("textarea").addClass("bg-success text-white");
        
    }
    
    if (data[id]) {
        console.log(data[id]);
    }
});

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
// Look to localStorage for any stored activites
// If there is no item stored under the name of "day-schedule", default to an empty object

