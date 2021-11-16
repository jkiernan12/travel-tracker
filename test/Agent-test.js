import chai from 'chai';
const expect = chai.expect;
import Trip from "../src/Trip.js";
import TripRepo from "../src/Trip.js";
import Agent from '../src/Agent.js';
import User from "../src/User.js";
import { allTrips, allDestinations, allUsers } from "./dataset.js";

describe('Trip', () => {
  let trip, tripRepo, agent;
  beforeEach(() => {
    trip = new Trip({
      "id": 5,
      "userID": 2,
      "destinationID": 4,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }, destinationData);
    tripRepo = new TripRepo(allTrips, allDestinations);
    agent = new Agent(tripRepo, allUsers)
  });

  it('should have access to all trips', () => {
    expect(agent.allTrips).to.equal(tripRepo);
  });

  it('should be able to get all pending trips', () => {
    expect(agent.getPending()).to.eql([
      {
        "id": 5,
        "userID": 2,
        "destinationID": 4,
        "travelers": 3,
        "date": "2022/04/30",
        "duration": 18,
        "status": "pending",
        "suggestedActivities": []
      }
    ]);
  });

  it('should should show all income generated in past year', () => {
    expect(agent.getYearIncome()).to.equal(0);
  });

  it('should show all users currently on trip', () => {
    expect(agent.getCurrentTravelers()).to.equal("here");
  });
});