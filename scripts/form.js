const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

window.onload = function() {
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
};


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