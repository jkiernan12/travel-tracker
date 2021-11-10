import chai from 'chai';
const expect = chai.expect;
import User from "../src/User.js";
import TripRepo from "../src/TripRepo.js";
import Trip from "../src/Trip.js";
import { allTrips, allDestinations } from "./dataset.js";

describe('User', () => {
  let user, tripRepo;
  beforeEach(() => {
    tripRepo = new TripRepo(allTrips, allDestinations);
    user = new User(2, tripRepo.getUserTrips(2));
  })

  it('should hold all of the users trip data', () => {

    expect(user.allTrips).to.be.an.instanceOf(Array);
    expect(user.allTrips[0]).to.be.an.instanceOf(Trip);
  });

  it('should return past, present and upcoming trips', () => {
    expect(user.getTripsByDate("past")).to.be.an.instanceOf(Array);
    expect(user.getTripsByDate("past")[0]).to.be.an.instanceOf(Trip);
    expect(user.getTripsByDate("past")[0].date).to.equal("2021/05/22");
    expect(user.getTripsByDate("present")[0].date).to.equal("2021/11/8");
    expect(user.getTripsByDate("future")[0].date).to.equal("2022/04/30");
  });

  it('should calculate total spent in past year', () => {
    expect(user.lastYearCost()).to.equal(2790);
  });

  it('should return pending trips', () => {
    expect(user.getPending()).to.be.an.instanceOf(Array);
    expect(user.getPending()[0]).to.be.an.instanceOf(Trip);
    expect(user.getPending()[0].status).to.equal("pending");
  });
});