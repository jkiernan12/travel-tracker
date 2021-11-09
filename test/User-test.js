import chai from 'chai';
const expect = chai.expect;
import User from "../src/User.js"
import { allUsers, allTrips, allDestinations } from "./dataset.js"

describe('User', () => {
  let user;
  beforeEach(() => {
    user = new User(2, allTrips);
  })

  it('should hold all of the users trip data', () => {

    expect(user.allTrips).to.eql([{
      "id": 3,
      "userID": 2,
      "destinationID": 1,
      "travelers": 4,
      "date": "2019/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 4,
      "userID": 2,
      "destinationID": 3,
      "travelers": 2,
      "date": "2021/11/8",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 5,
      "userID": 2,
      "destinationID": 4,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
    } ]);
  });

  it('should return past, present and upcoming trips', () => {
    expect(user.getTripsByDate("past")).to.equal([{
      "id": 3,
      "userID": 2,
      "destinationID": 1,
      "travelers": 4,
      "date": "2019/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
    }]);
    expect(user.getTripsByDate("present")).to.equal([{
      "id": 4,
      "userID": 2,
      "destinationID": 3,
      "travelers": 2,
      "date": "2021/11/8",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
    }]);
    expect(user.getTripsByDate("future")).to.equal([{
      "id": 5,
      "userID": 2,
      "destinationID": 4,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }]);
  });

  it('should return pending trips', () => {
    expect(user.getPendingTrips()).to.eql([{
      "id": 5,
      "userID": 2,
      "destinationID": 4,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }]);
  });

  it('should return pending trips', () => {
    expect(user.getPendingTrips()).to.eql([{
      "id": 5,
      "userID": 2,
      "destinationID": 4,
      "travelers": 3,
      "date": "2022/04/30",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
    }]);
  });
});
