import Destinations from "./Destinations";

const tripDestinationsInput = document.querySelector("#trip-destinations-input");
const tripDateInput = document.querySelector("#trip-date-input");


function initializeForm(data) {
  const allDestinations = new Destinations(data);
  const allNames = allDestinations.getAllNames();
  renderSelectList(allNames);
  setMinCalendarDate();
}

function setMinCalendarDate() {
  tripDateInput.min = new Date().toISOString().split("T")[0]
}

function renderSelectList(names) {
  console.log(names)
  tripDestinationsInput.innerHTML = "";
  names.forEach(name => {
    tripDestinationsInput.innerHTML += `<option value="${name.id}">${name.name}</option>`
  })
}

export { initializeForm }