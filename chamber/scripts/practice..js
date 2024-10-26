const greetingElement = document.getElementById('greeting-msg');
const lastVisit = localStorage.getItem('lastVisit'); //Gets the last time visited from local storage
const currentVisit = new Date().getTime();
const aDayInMillseconds = 1000 * 60 * 60 * 24


function displayGreeting() {
  if (!lastVisit) {
    // First visit
    greetingElement.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    // Calculate the difference in time between visits
    const timeDiff = currentVisit - parseInt(lastVisit);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (timeDiff < 24 * 60 * 60 * 1000) {
      // Less than a day since the last visit
      greetingElement.textContent = "Back so soon! Awesome!";
    } else {
      // More than a day since the last visit
      const daysText = daysDiff === 1 ? "day" : "days";
      greetingElement.textContent = `You last visited ${daysDiff} ${daysText} ago.`;
    }
  }
  // Update last visit date in localStorage
  localStorage.setItem('lastVisit', currentVisit);
  
}

displayGreeting();


// 1000 * 60 * 60 * 24 = equate to the number of milliseconds in a day 