const showsData = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];


const showsList = document.querySelector(".shows__container")

for(let i = 0 ; i < showsData.length; i++) {
  // Create items 
  const showsLi = document.createElement("article");
  showsLi.classList.add("shows-list__item");
  showsList.appendChild(showsLi);

  // Create paragraphs
  const showsDate = document.createElement("p");
  showsDate.innerText = "Date";
  showsDate.classList.add("shows__label")
  showsLi.appendChild(showsDate);

  const showsDateText = document.createElement("p");
  showsDateText.classList.add("shows__date")
  showsDateText.innerText = showsData[i].date;
  showsLi.appendChild(showsDateText);

  const showsVenue = document.createElement("p");
  showsVenue.innerText = "Venue";
  showsVenue.classList.add("shows__label")
  showsLi.appendChild(showsVenue);

  const showsVenueText = document.createElement("p");
  showsVenueText.innerText = showsData[i].venue;
  showsLi.appendChild(showsVenueText);

  const showsLocation = document.createElement("p");
  showsLocation.innerText = "Location";
  showsLocation.classList.add("shows__label")
  showsLi.appendChild(showsLocation);

  const showsLocationText = document.createElement("p");
  showsLocationText.innerText = showsData[i].location
  showsLi.appendChild(showsLocationText);
  
  // Create the button
  const showsBtn = document.createElement("button");
  showsBtn.innerText = 'BUY TICKETS'
  showsBtn.classList.add("shows__btn")
  showsLi.appendChild(showsBtn);
}


