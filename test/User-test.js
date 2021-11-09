import chai from 'chai';
const expect = chai.expect;
import User from "../src/User.js"

describe('User', () => {
  let user;
  beforeEach(() => {
    user = new User();
  })

  it('should hold all of the users trip data', () => {
    expect(user.allTrips).to.eql();
  });

  it('should return past, present, upcoming and pending trips', () => {
    expect(user.getTrips("past")).to.equal("")
  });
});
