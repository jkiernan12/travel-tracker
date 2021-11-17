class Destinations {
  constructor(allDestinations) {
    this.allDestinations = allDestinations;
  }

  getAllNames() {
    return this.allDestinations.sort((a, b) => {
      if (b.destination < a.destination) {
        return 1;
      } else if (b.destination > a.destination) {
        return -1;
      } else {
        return 0;
      }
    })
      .map(destination => { 
        return { name: destination.destination, id: destination.id }
      });
  }

  getByID(id) {
    return this.allDestinations.find(destination => destination.id === id);
  }
}

export default Destinations;