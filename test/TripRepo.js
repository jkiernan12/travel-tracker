import chai from 'chai';
const expect = chai.expect;
import TripRepo from "../src/TripRepo.js";
import Trip from "../src/Trip.js";
import { allUsers, allTrips, allDestinations } from "./dataset.js";

describe('User', () => {
  let tripRepo;
  beforeEach(() => {
    tripRepo = new TripRepo(allTrips, allDestinations);
  })

  it('should hold all of the users trip data', () => {
    expect(tripRepo)
  });
});