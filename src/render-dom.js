const pendingSectionTrips = document.querySelector("#pendingSectionTrips");
const pastSectionTrips = document.querySelector("#pastSectionTrips");
const futureSectionTrips = document.querySelector("#futureSectionTrips");
const currentSectionTrips = document.querySelector("#currentSectionTrips");
const totalYearSpent = document.querySelector("#totalYearSpent");
const userGreeting = document.querySelector("#userName");
const navBar = document.querySelector("#navBar");
const menuItems = document.querySelectorAll("#navBar li");
const allSections = document.querySelectorAll("section");

navBar.addEventListener('click', switchSection);
navBar.addEventListener('keyup', checkEnterKey);

function checkEnterKey(e) {
  if (e.keyCode === 13) {
    switchSection(e);
  }
}

function switchSection(e) {
  const clickedSection = document.querySelector(`#${e.target.dataset.section}`);
  if (e.target.dataset.section) {
    toggleMenuItem(e.target);
    allSections.forEach(section => hideElement(section));
    showElement(clickedSection);
  }
}

function hideElement(element) {
  element.classList.add("hidden");
  element.ariaHidden = true;
}
function showElement(element) {
  element.classList.remove("hidden");
  element.ariaHidden = false;
}

function toggleMenuItem(element) {
  menuItems.forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
}

function renderUserPage(user) {
  totalYearSpent.innerHTML = "$" + user.lastYearCost();
  userGreeting.innerText = user.name;
  renderSection(pendingSectionTrips, user.getPending());
  renderSection(pastSectionTrips, user.getTripsByDate("past"));
  renderSection(futureSectionTrips, user.getTripsByDate("future"));
  renderSection(currentSectionTrips, user.getTripsByDate("current"));
}

function renderWidget(trip) {
  const isPending = (trip.status === "pending") ? "<p>Status: Pending</p>" : ""
  const city = trip.destinationName.split(", ")[0];
  const region = trip.destinationName.split(", ")[1];
  return `<article>
    <h4>${city}</h4>
      <img src="${trip.img}" alt="${trip.alt}"/>
    <p class="region">${region}</p>
    <p>${trip.date}</p>
    <p>${trip.numTravelers} travelers</p>
    ${isPending}
    <p>Total Cost: $${trip.getTotalCost()}</p>
  </article>`
}

function renderSection(section, data) {
section.innerHTML = "";
data.forEach(trip => {
  section.innerHTML += renderWidget(trip);
})
}

export { renderUserPage, hideElement, showElement }