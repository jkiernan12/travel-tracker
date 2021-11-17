import User from "./User";

class Agent {
  constructor(allTrips, allUsers) {
    this.allTrips = allTrips;
    this.allUsers = this.createAllUsers(allUsers);
  }

  createAllUsers(data) {
    return data.map((user) => {
      return new User(user, this.allTrips.getUserTrips(user.id))
    })
  }

  getPending() {
    return this.allTrips.allTrips.filter(trip => {
      return trip.status === 'pending';
    });
  }

  getYearIncome() {
    const pastYearDate = new Date().setFullYear(new Date().getFullYear() - 1);
    return this.allTrips.allTrips.filter(trip => {
      const tripDate = Date.parse(trip.date);
      return (tripDate > pastYearDate && tripDate < new Date())
    })
      .reduce((total, trip) => {
        return total += trip.getTotalCost();
      }, 0);
  }
  
  getCurrentTravelers() {
    return this.allUsers.filter(user => {
      return user.getTripsByDate("current")[0];
    })
  }
}

export default Agent;