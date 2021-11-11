import User from './User';
import TripRepo from './TripRepo';

function getData(userID, callback) {
  return Promise.all([
    fetch('http://localhost:3001/api/v1/travelers/' + userID),
    fetch('http://localhost:3001/api/v1/trips'),
    fetch('http://localhost:3001/api/v1/destinations')
  ]).then((res) => {
    // if (res.ok) {
      return Promise.all(res.map(res => res.json()));
    // } else {
      
    // }
  })
  .then(data => callback(data))
  .catch(err => console.log(err))
}

export { getData };

