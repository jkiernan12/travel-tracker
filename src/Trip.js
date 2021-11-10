class Trip {
  constructor(tripData, destinationData) {
    this.userID = tripData.userID;
    this.numTravelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
    this.destinationName = destinationData.destination;
    this.lodgingPerDay = destinationData.estimatedLodgingCostPerDay;
    this.flightCost = destinationData.estimatedFlightCostPerPerson;
    this.img = destinationData.image;
    this.alt = destinationData.alt;
  }

  getTotalCost() {
    const totalFlights = this.numTravelers * this.flightCost;
    const totalAccomodations = this.duration * this.lodgingPerDay;
    return totalFlights + totalAccomodations;
  }
}

export default Trip;
