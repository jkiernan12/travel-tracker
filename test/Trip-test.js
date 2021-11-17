import chai from 'chai';
const expect = chai.expect;
import Trip from "../src/Trip.js";
import { allTrips, allDestinations } from "./dataset.js";

describe('Trip', () => {
  let trip;
  const destinationData = allDestinations[0];
  const tripData = allTrips[0];
  beforeEach(() => {
    trip = new Trip(tripData, destinationData);
  })
  
  it('should have all the properties from the trip dataset', () => {
    expect(trip.numTravelers).to.equal(1);
    expect(trip.date).to.equal("2021/09/16");
    expect(trip.duration).to.equal(8);
    expect(trip.status).to.equal("approved");
    expect(trip.suggestedActivities).to.eql([]);
  });

  it('should have all the properties from the destination dataset', () => {
    expect(trip.destinationName).to.equal("Lima, Peru");
    expect(trip.lodgingPerDay).to.equal(70);
    expect(trip.flightCost).to.equal(400);
    expect(trip.img).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(trip.alt).to.equal("overview of city buildings with a clear sky");
  });

  it('should return a total cost', () => {
    expect(trip.getTotalCost()).to.equal(960); 
  });
});