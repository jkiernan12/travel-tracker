const pendingSection = document.querySelector("#pendingSection");
const pastSection = document.querySelector("#pastSection");
const futureSection = document.querySelector("#futureSection");
const currentSection = document.querySelector("#currentSection");
const totalYearSpent = document.querySelector("#totalYearSpent");
const userGreeting = document.querySelector("#userName");

function renderUserPage(user) {
  totalYearSpent.innerHTML = "$" + user.lastYearCost();
  userGreeting.innerText = user.name;
  renderSection(pendingSection, user.getPending());
  renderSection(pastSection, user.getTripsByDate("past"));
  renderSection(futureSection, user.getTripsByDate("future"));
  renderSection(currentSection, user.getTripsByDate("current"));
}

function renderWidget(trip) {
  return `<article>
    <img src="${trip.img}" alt="${trip.alt}"/>
    <h4>${trip.destinationName}</h4>
    <p>${trip.date}</p>
    <p>${trip.numTravelers} travelers</p>
    <p>Total Cost: $${trip.getTotalCost()}</p>
  </article>`
}

function renderSection(section, data) {
section.innerHTML = "";
data.forEach(trip => {
  section.innerHTML += renderWidget(trip);
})
}

export { renderUserPage }