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

// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
    var windChill;

    // Check if conditions are met for viable wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) { // Metric units
        windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill * 10) / 10 + "°C";
    } else if (temperature <= 50 && windSpeed > 3) { // Imperial units
        windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill * 10) / 10 + "°F";
    } else {
        return "N/A";
    }
}
// Get temperature and wind speed
var temperature = 21; // Static temperature in Celsius
var windSpeed = 8; // Static wind speed in km/h

// Display windchill
var windchill = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill").textContent = windchill;