import TripRepo from "./TripRepo.js";

class User {
  constructor(id, userTrips) {
    this.id = id;
    this.allTrips = userTrips;
  }

  getTripsByDate(timeframe) {
    const currentDate = Date.now();
    const dayMultiplier = 86400000;
    return this.allTrips.filter(trip => {
      let tripEnd = Date.parse(trip.date) + trip.duration * dayMultiplier;
      let tripStart = Date.parse(trip.date);

      if (timeframe === "past") {
        return (tripEnd < currentDate);
      } else if (timeframe === "future") {
        return (tripStart > currentDate);
      } else {
        return (tripStart <= currentDate && tripEnd >= currentDate);
      }
    });
  }

  lastYearCost() {
    const dayMultiplier = 86400000;
    const pastYearDate = Date.now() - (dayMultiplier * 365);

    return this.getTripsByDate("past")
    .filter(trip => {
      return (Date.parse(trip.date) > pastYearDate)
    })
    .reduce((total, trip) => {
      return total += trip.getTotalCost();
    }, 0)
  }

  getPending() {
    return this.getTripsByDate("future").filter(trip => trip.status === "pending")
  }
}

export default User;