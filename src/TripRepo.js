import Trip from "./Trip.js";

class TripRepo {
  constructor(allTrips, allDestinations) {
    this.allDestinations = allDestinations;
    this.allTrips = this.createAllTrips(allTrips);
  }

  createAllTrips(allTripData) {
    return allTripData.map(trip => {
      const currentDestination = this.allDestinations
        .find(destination => destination.id === trip.destinationID);
      return new Trip(trip, currentDestination);
    });
  }

  getUserTrips(currentUserID) {
    return this.allTrips.filter(trip => trip.userID === currentUserID);
  }
}

export default TripRepo;