class User {
  constructor(userData, userTrips) {
    this.id = userData.id;
    this.name = userData.name;
    this.allTrips = userTrips;
  }

  getTripsByDate(timeframe) {
    const currentDate = new Date();
    return this.allTrips.filter(trip => {
      let tripEnd = this.getEndDate(trip.date, trip.duration);
      let tripStart = new Date(trip.date);

      if (timeframe === "past") {
        return (tripEnd < currentDate);
      } else if (timeframe === "future") {
        return (tripStart > currentDate);
      } else {
        return (tripStart <= currentDate && tripEnd >= currentDate);
      }
    });
  }

  getEndDate(date, duration) {
    const startDate = new Date(date);
    return new Date(startDate.setDate(startDate.getDate() + duration));
  }

  lastYearCost() {
    const pastYearDate = new Date().setFullYear(new Date().getFullYear() - 1);

    return this.getTripsByDate("past")
      .filter(trip => {
        return (Date.parse(trip.date) > pastYearDate)
      })
      .reduce((total, trip) => {
        return total += trip.getTotalCost();
      }, 0)
  }

  getPending() {
    return this.getTripsByDate("future")
      .filter(trip => trip.status === "pending");
  }
}

export default User;