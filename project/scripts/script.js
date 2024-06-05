document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            title: "Event 1",
            details: "Details about event 1.",
            image: "images/event1.jpg",
            alt: "Event 1"
        },
        {
            title: "Event 2",
            details: "Details about event 2.",
            image: "images/event2.jpg",
            alt: "Event 2"
        },
        {
            title: "Event 3",
            details: "Details about event 3.",
            image: "images/event3.jpg",
            alt: "Event 3"
        }
    ];

    const slider = document.getElementById('slider');
    const pagination = document.querySelector('.pagination');
    let currentIndex = 0;
    let slideInterval;

    function createSlides() {
        events.forEach((event, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            if (index === 0) slide.classList.add('active');

            slide.innerHTML = `
                <img src="${event.image}" alt="${event.alt}">
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <p>${event.details}</p>
                </div>
            `;
            slider.appendChild(slide);

            const dot = document.createElement('div');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', function() {
                currentIndex = index;
                showSlide(currentIndex);
            });
            pagination.appendChild(dot);
        });
    }

    function updatePagination() {
        pagination.querySelectorAll('div').forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        updatePagination();
    }

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % events.length;
        showSlide(currentIndex);
        resetInterval();
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + events.length) % events.length;
        showSlide(currentIndex);
        resetInterval();
    });

    function autoSlide() {
        slideInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % events.length;
            showSlide(currentIndex);
        }, 5000); // Change slide every 5 seconds
    }

    function resetInterval() {
        clearInterval(slideInterval);
        autoSlide();
    }

    createSlides();
    showSlide(currentIndex);
    autoSlide();
});


// Event List
document.addEventListener("DOMContentLoaded", function () {
    // Define an array of event objects
    var events = [
        {
            imgSrc: "images/event1.webp",
            altText: "Event 1",
            title: "Event 1",
            date: "June 1, 2024",
            time: "10:00 AM",
            venue: "DA JAKARANDA PARK",
            description: "This is a brief description of Event 1."
        },
        {
            imgSrc: "images/event2.webp",
            altText: "Event 2",
            title: "Event 2",
            date: "June 2, 2024",
            time: "11:00 AM",
            venue: "CENTRAL PARK",
            description: "This is a brief description of Event 2."
        },
        {
            imgSrc: "images/event3.webp",
            altText: "Event 3",
            title: "Event 3",
            date: "June 3, 2024",
            time: "12:00 PM",
            venue: "CITY SQUARE",
            description: "This is a brief description of Event 3."
        }
    ];

    // Get the event-listings section
    var eventListings = document.getElementById("event-listings");

    // Iterate over the events array and create HTML for each event
    events.forEach(function (event) {
        var eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        var img = document.createElement("img");
        img.src = event.imgSrc;
        img.alt = event.altText;

        var eventInfoDiv = document.createElement("div");
        eventInfoDiv.classList.add("event-info");

        var title = document.createElement("h3");
        title.textContent = event.title;

        var date = document.createElement("p");
        date.textContent = "Date: " + event.date;

        var time = document.createElement("p");
        time.textContent = "Time: " + event.time;

        var venue = document.createElement("p");
        venue.textContent = "VENUE: " + event.venue;

        var description = document.createElement("p");
        description.textContent = "Description: " + event.description;

        eventInfoDiv.appendChild(title);
        eventInfoDiv.appendChild(date);
        eventInfoDiv.appendChild(time);
        eventInfoDiv.appendChild(venue);
        eventInfoDiv.appendChild(description);

        eventDiv.appendChild(img);
        eventDiv.appendChild(eventInfoDiv);

        eventListings.appendChild(eventDiv);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get current year
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerText = currentYear;

    // Dynamic content for contact info
    var contactInfo = document.createElement("p");
    contactInfo.innerHTML = "Contact us: <a href='mailto:info@communityevents.com'>info@communityevents.com</a> | +123 456 7890";
    document.querySelector("#dynamicFooter .contact-info").appendChild(contactInfo);

    // Dynamic content for social media icons
    var socialMediaIcons = [
        { href: "#", src: "images/facebook.webp", alt: "Facebook" },
        { href: "#", src: "images/twiter.webp", alt: "Twitter" },
        { href: "#", src: "images/instagram.webp", alt: "Instagram" }
    ];

    socialMediaIcons.forEach(function (icon) {
        var socialLink = document.createElement("a");
        socialLink.href = icon.href;
        var socialIcon = document.createElement("img");
        socialIcon.src = icon.src;
        socialIcon.alt = icon.alt;
        socialIcon.height = 30;
        socialLink.appendChild(socialIcon);
        document.querySelector("#dynamicFooter .social-media").appendChild(socialLink);
    });
});

// JavaScript for dynamically injecting events
document.addEventListener("DOMContentLoaded", function () {
    // Get existing events from local storage or use an empty array if none exists
    var events = JSON.parse(localStorage.getItem("events")) || [];

    // Display existing events
    events.forEach(function(event) {
        addEventToListings(event);
    });

    // Function to add the event to the event listings
    function addEventToListings(event) {
        var eventListings = document.getElementById("event-listings");

        var eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        var img = document.createElement("img");
        img.src = event.imgSrc;
        img.alt = event.altText;

        var eventInfoDiv = document.createElement("div");
        eventInfoDiv.classList.add("event-info");

        var title = document.createElement("h3");
        title.textContent = event.title;

        var date = document.createElement("p");
        date.textContent = event.date;

        var time = document.createElement("p");
        time.textContent = event.time;

        var venue = document.createElement("p");
        venue.textContent = event.venue;

        var description = document.createElement("p");
        description.textContent = event.description;

        eventInfoDiv.appendChild(title);
        eventInfoDiv.appendChild(date);
        eventInfoDiv.appendChild(time);
        eventInfoDiv.appendChild(venue);
        eventInfoDiv.appendChild(description);

        eventDiv.appendChild(img);
        eventDiv.appendChild(eventInfoDiv);

        eventListings.appendChild(eventDiv);
    }
});