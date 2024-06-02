const eventList = [];

const events = [
    {
      name: "Event 1",
      date: "2024-07-01",
      description: "This is a sample event description",
      featured: true
    },
    {
      name: "Event 2",
      date: "2024-07-15",
      description: "This is another sample event description",
      featured: true
    },
    {
      name: "Event 3",
      date: "2024-08-01",
      description: "This is a sample event description",
      featured: false
    },
    {
      name: "Event 4",
      date: "2024-08-15",
      description: "This is another sample event description",
      featured: false
    },
    {
      name: "Event 5",
      date: "2024-09-01",
      description: "This is a sample event description",
      featured: true
    }
  ];
  
  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.filter(event => !event.featured);
  
  // Home page featured events
  document.getElementById("featured-events").innerHTML = "";
  featuredEvents.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Description: ${event.description}</p>
    `;
    document.getElementById("featured-events").appendChild(eventDiv);
  });
  
  // Home page upcoming events
  document.getElementById("upcoming-events").innerHTML = "";
  upcomingEvents.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Description: ${event.description}</p>
    `;
    document.getElementById("upcoming-events").appendChild(eventDiv);
  });
  
  // Events page all events
  document.getElementById("all-events").innerHTML = "";
  events.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Description: ${event.description}</p>
    `;
    document.getElementById("all-events").appendChild(eventDiv);
  });
  
// Function to render events on the Events page
const renderEvents = () => {
  const allEventsSection = document.getElementById("all-events");
  allEventsSection.innerHTML = "";

  eventList.forEach((event, index) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Description: ${event.description}</p>
    `;

    allEventsSection.appendChild(eventDiv);
  });
};

// Function to add a new event
const addEvent = (name, date, description) => {
  const newEvent = { name, date, description };
  eventList.push(newEvent);
  renderEvents();
};

// Event listener for the event form submission
const eventForm = document.getElementById("event-form");
eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const eventName = eventForm.elements["event-name"].value;
  const eventDate = eventForm.elements["event-date"].value;
  const eventDescription = eventForm.elements["event-description"].value;

  addEvent(eventName, eventDate, eventDescription);

  eventForm.reset();
});
