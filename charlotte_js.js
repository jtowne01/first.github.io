"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   City of Charlotte
   Author: Jason Towne
   Date: 5/5/2024
*/


  const eventForm = document.querySelector('#eventForm');

  eventForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(eventForm);
	


    console.log('Event Name:', formData.get('eventName'));
    console.log('Event Date:', formData.get('eventDate'));
    console.log('Event Type:', formData.get('eventType'));
    console.log('Max Attendees:', formData.get('maxAttendees'));
    console.log('Ticket Price:', formData.get('ticketPrice'));
    console.log('Amenities:', [...formData.getAll('amenities')]);

    eventForm.reset();
  });




const ticketPriceRange = document.getElementById('ticketPrice');
const ticketPriceInput = document.getElementById('ticketPriceInput');
const ticketPriceValue = document.getElementById('ticketPriceValue');

ticketPriceValue.textContent = `$${ticketPriceRange.value}`;

ticketPriceRange.addEventListener('input', function () {
  ticketPriceValue.textContent = `$${this.value}`;
  ticketPriceInput.value = this.value;
});

ticketPriceInput.addEventListener('input', function () {
  ticketPriceRange.value = this.value;
  ticketPriceValue.textContent = `$${this.value}`;
});


    


   const m5Date = Date.now();
   const thisDay = new Date("May 5, 2024");
// this uses a math method //
   var days = (m5Date - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;
   
   
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);


function may5th(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("June 22, 2024");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}



const nextFestivalDate = new Date('2024-06-22T00:00:00');
// This is a countdown function //
function updateCountdownTimer() {
  const currentDate = new Date();
  const timeDifference = nextFestivalDate.getTime() - currentDate.getTime();

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
// formats numbers as text //
  document.getElementById("dLeft").textContent = days;
  document.getElementById("hLeft").textContent = hours;
  document.getElementById("mLeft").textContent = minutes;
  document.getElementById("sLeft").textContent = seconds;
}

function displayCurrentDateTime() {
  const currentDate = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

  console.log('Current Date:', formattedDate);
  console.log('Current Time:', formattedTime);
}


updateCountdownTimer();

// Runs a command at a specified interval // 
setInterval(updateCountdownTimer, 1000);

function updateCurrentDateTime() {
  const currentDate = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

  const dateTimeElement = document.getElementById('currentDateTime');
  dateTimeElement.textContent = `${formattedDate} - ${formattedTime}`;
}

// Call the updateCurrentDateTime function initially
updateCurrentDateTime();

// Update the current date and time every second
setInterval(updateCurrentDateTime, 1000);