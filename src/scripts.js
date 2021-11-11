// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { getData } from './api-calls.js'


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import User from './User';
import TripRepo from './TripRepo';
import { renderUserPage } from './render-dom'



console.log('This is the JavaScript entry file - your code begins here.');

getData(38, initClasses)

function initClasses(allData) {
  console.log(allData)
  const currentUserID = allData[0].id;
  const tripRepo = new TripRepo(allData[1].trips, allData[2].destinations);
  const user = new User(currentUserID, tripRepo.getUserTrips(currentUserID));
  renderUserPage(user)
}