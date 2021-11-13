import chai from 'chai';
const expect = chai.expect;
import Destinations from "../src/Destinations.js";
import { allDestinations } from "./dataset.js";

describe('Destinations', () => {
  let destinations;
  beforeEach(() => {
    destinations = new Destinations(allDestinations);
  })
  
  it('should return a alpha sorted array of destination names and Ids', () => {
    expect(destinations.getAllNames()).to.be.an.instanceOf(Array)
    expect(destinations.getAllNames()[0].name).to.equal("Cartagena, Colombia");
    expect(destinations.getAllNames()[0].id).to.equal(4);
    expect(destinations.getAllNames()[3].name).to.equal("Sydney, Austrailia");
  });
});