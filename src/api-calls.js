import { initClasses, user } from './scripts.js'

function getData(userID, callback) {
  return Promise.all([
    fetch('http://localhost:3001/api/v1/travelers/' + userID),
    fetch('http://localhost:3001/api/v1/trips'),
    fetch('http://localhost:3001/api/v1/destinations')
  ]).then((res) => {
      return Promise.all(res.map(res => res.json()));
  })
  .then(data => callback(data))
  .catch(err => console.log(err))
}

function postData(data) {
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON',
    },
    body: JSON.stringify(data),
  })
  .then(res => {
    if (res.ok) {
      getData(user.id, initClasses)
      return res.json()
    } else {
      throw new Error()
    }
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

export { getData, postData };

