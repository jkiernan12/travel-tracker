import chai from 'chai';
const expect = chai.expect;
import TripRepo from "../src/TripRepo.js";
import Trip from "../src/Trip.js";
import { allTrips, allDestinations } from "./dataset.js";

describe('UserRepo', () => {
  let tripRepo;
  beforeEach(() => {
    tripRepo = new TripRepo(allTrips, allDestinations);
  })

  it('should hold all of the users trip data', () => {
    expect(tripRepo.allTrips).to.be.an.instanceOf(Array);
    expect(tripRepo.allTrips[0]).to.be.an.instanceOf(Trip)
  });
  
  it('should return a filtered list of trips by user ID', () => {
    expect(tripRepo.getUserTrips(1)).to.be.an.instanceOf(Array);
    expect(tripRepo.getUserTrips(1)[0]).to.be.an.instanceOf(Trip);
    expect(tripRepo.getUserTrips(1)[0].userID).to.equal(1);
  });
});