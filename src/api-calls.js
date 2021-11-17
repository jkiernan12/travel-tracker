import { initClasses, user } from './scripts.js';
import { showElement, hideElement } from './render-dom.js';

const errorModal = document.querySelector("#modal-1");
const errorExit = document.querySelector("#errorClose");
const errMessage = document.querySelector("#modal-1-content");

errorExit.addEventListener('click', hideErr);

function getData(userID, callback) {
  return Promise.all([
    fetch('http://localhost:3001/api/v1/travelers/' + userID),
    fetch('http://localhost:3001/api/v1/trips'),
    fetch('http://localhost:3001/api/v1/destinations')
  ]).then((res) => {
    if (res.every(res => res.ok)) {
    return Promise.all(res.map(res => res.json()));
    } else {
      throw new Error("Error connecting to database.")
    }
  })
    .then(data => callback(data))
    .catch(err => handleErr(err))
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
        throw new Error("Please make sure all inputs are complete.")
      }
    }).catch(err => handleErr(err))
}

function handleErr(err) {
  showElement(errorModal);
  errMessage.innerText = err.message;
}

function hideErr() {
  hideElement(errorModal);
}

export { getData, postData };

