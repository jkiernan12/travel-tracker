import Trip from "./Trip";
import { user, tripRepo, destinations } from "./scripts.js";
import { postData } from './api-calls.js';

//Query Selectors
const requestTripBtn = document.querySelector("#requestTripBtn");
const totalTripCost = document.querySelector('#totalTripCost');
//Form Elements
const newTripForm = document.querySelector("#newTripForm");
const newTripFormInputs = document.querySelectorAll("#newTripForm input, #newTripForm select")
const tripDurationInput = document.querySelector("#trip-duration-input");
const tripDateInput = document.querySelector("#trip-date-input");
const tripNumTravelersInput = document.querySelector("#trip-numTravelers-input");
const tripDestinationsInput = document.querySelector("#trip-destinations-input");

//Event listeners
requestTripBtn.addEventListener("click", postNewTrip)
newTripForm.addEventListener("change", checkPrice);

//Functions
function checkPrice() {
  if (checkInputs()) {
    let newTrip = instantiateNewTrip();
    totalTripCost.innerText = newTrip.getTotalCost();
  }
}

function postNewTrip(e) {
  e.preventDefault();
  postData(instantiateTripData());
  newTripForm.reset();
}

function instantiateNewTrip() {
  const currentDestID = Number(tripDestinationsInput.value);
  const currentDest = destinations.getByID(currentDestID);
  return new Trip(instantiateTripData(), currentDest);
}

function instantiateTripData() {
  const currentDate = tripDateInput.value.replaceAll("-", "/");
  return { 
    id: tripRepo.allTrips.length + 1,
    userID: user.id,
    destinationID: Number(tripDestinationsInput.value),
    travelers: Number(tripNumTravelersInput.value),
    date: currentDate,
    duration: Number(tripDurationInput.value),
    status: "pending",
    suggestedActivities: []
  }
}

function checkInputs() {
  return Array.from(newTripFormInputs).every(input => input.value);
}

function initializeForm() {
  renderSelectList(destinations.getAllNames());
  setMinCalendarDate();
}

function setMinCalendarDate() {
  tripDateInput.min = new Date().toISOString().split("T")[0]
}

function renderSelectList(names) {
  tripDestinationsInput.innerHTML = `<option class="default-select" value="">Choose a destination</option>`;
  names.forEach(name => {
    tripDestinationsInput.innerHTML += `<option value="${name.id}">${name.name}</option>`
  });
}

export { initializeForm }