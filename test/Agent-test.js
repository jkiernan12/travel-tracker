import chai from 'chai';
const expect = chai.expect;
import TripRepo from "../src/TripRepo.js";
import Agent from '../src/Agent.js';
import User from "../src/User.js";
import { allTrips, allDestinations, allUsers } from "./dataset.js";

describe('Trip', () => {
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
    expect(agent.getPending()).to.eql([
      {
        "alt": "boats at a dock during the day time",
        "date": "2022/04/30",
        "destinationName": "Cartagena, Colombia",
        "destinationID": 4,
        "duration": 18,
        "flightCost": 350,
        "img": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "lodgingPerDay": 65,
        "numTravelers": 3,
        "id": 5,
        "status": "pending",
        "suggestedActivities": [],
        "travelers": 3,
        "userID": 2,
      }
    ]);
  });

  it('should should show all income generated in past year', () => {
    expect(agent.getYearIncome()).to.equal(15850);
  });

  it('should show all users currently on trip', () => {
    expect(agent.getCurrentTravelers()[0]).to.be.an.instanceOf(User);
  });
});