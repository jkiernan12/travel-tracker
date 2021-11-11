const pendingSection = document.querySelector("#pendingSection");
const pastSection = document.querySelector("#pastSection")

function renderUserPage(user) {
console.log(user.getPending())
renderSection(pastSection, user.getTripsByDate("past"));
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
console.log("render wor", data)
section.innerHTML = "";
data.forEach(trip => {
  section.innerHTML += renderWidget(trip);
})
}

export { renderUserPage }