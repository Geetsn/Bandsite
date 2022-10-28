const showsList = document.querySelector(".shows__container")

const getData = function(){
axios
.get(`https://project-1-api.herokuapp.com/showdates?api_key=20180084-46da-477c-9452-b765e215d2c4`)
.then(res => {
  console.log(res.data);
  showsData(res.data);
})}

getData();

function showsData(array){
for(let i = 0 ; i < array.length; i++) {
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
  showsDateText.innerText = new Date(array[i].date).toDateString();
  showsLi.appendChild(showsDateText);

  const showsVenue = document.createElement("p");
  showsVenue.innerText = "Venue";
  showsVenue.classList.add("shows__label")
  showsLi.appendChild(showsVenue);

  const showsVenueText = document.createElement("p");
  showsVenueText.innerText = array[i].place;
  showsLi.appendChild(showsVenueText);

  const showsLocation = document.createElement("p");
  showsLocation.innerText = "Location";
  showsLocation.classList.add("shows__label")
  showsLi.appendChild(showsLocation);

  const showsLocationText = document.createElement("p");
  showsLocationText.innerText = array[i].location
  showsLi.appendChild(showsLocationText);
  
  // Create the button
  const showsBtn = document.createElement("button");
  showsBtn.innerText = 'BUY TICKETS'
  showsBtn.classList.add("shows__btn")
  showsLi.appendChild(showsBtn);
}
}
