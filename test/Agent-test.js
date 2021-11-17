import chai from 'chai';
const expect = chai.expect;
import TripRepo from "../src/TripRepo.js";
import Trip from "../src/Trip.js";
import Agent from '../src/Agent.js';
import User from "../src/User.js";
import { allTrips, allDestinations, allUsers } from "./dataset.js";

describe('Agent', () => {
  let tripRepo, agent;
  beforeEach(() => {
    tripRepo = new TripRepo(allTrips, allDestinations);
    agent = new Agent(tripRepo, allUsers)
  });

  it('should have access to all trips', () => {
    expect(agent.allTrips).to.equal(tripRepo);
  });

  it('should have access to all users', () => {
    expect(agent.allUsers[0]).to.be.an.instanceOf(User);
  });

  it('should be able to get all pending trips', () => {
    expect(agent.getPending()[0]).to.be.an.instanceOf(Trip);
    expect(agent.getPending()[0].userID).to.equal(2);
  });

  it('should should show all income generated in past year', () => {
    expect(agent.getYearIncome()).to.equal(15850);
  });

  it('should show all users currently on trip', () => {
    expect(agent.getCurrentTravelers()[0]).to.be.an.instanceOf(User);
  });
});