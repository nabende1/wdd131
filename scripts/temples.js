// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

var currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;


// Get the last modified date/time
var lastModifiedString = document.lastModified;

// Convert the last modified string into a Date object
var lastModified = new Date(lastModifiedString);

// Get the year, month, day, hour, minute, and second from the last modified date/time
var lastModifiedYear = lastModified.getFullYear();
var lastModifiedMonth = lastModified.getMonth() + 1; // Months are zero-based, so we add 1
var lastModifiedDay = lastModified.getDate();
var lastModifiedHour = lastModified.getHours();
var lastModifiedMinute = lastModified.getMinutes();
var lastModifiedSecond = lastModified.getSeconds();

// Format the date/time
var formattedLastModified = lastModifiedYear + '/' + padZero(lastModifiedMonth) + '/' + padZero(lastModifiedDay) + ' ' + padZero(lastModifiedHour) + ':' + padZero(lastModifiedMinute) + ':' + padZero(lastModifiedSecond);

// Insert the formatted date/time into the element with the ID "lastModified"
document.getElementById("lastModified").textContent = formattedLastModified;

// Function to add leading zero if the number is less than 10
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}
