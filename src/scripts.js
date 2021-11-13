import './css/base.scss';
import { renderUserPage } from './render-dom'
import { getData } from './api-calls.js';
import { initializeForm } from './add-trip.js';
import User from './User';
import TripRepo from './TripRepo';
import Destinations from './Destinations';
import MicroModal from 'micromodal';
MicroModal.init();

//Globals
let user, tripRepo, destinations;

getData(29, initClasses)

function initClasses(allData) {
  const userData = allData[0];
  tripRepo = new TripRepo(allData[1].trips, allData[2].destinations);
  destinations = new Destinations(allData[2].destinations);
  user = new User(userData, tripRepo.getUserTrips(userData.id));
  renderUserPage(user)
  initializeForm()
}

export { user, tripRepo, destinations, initClasses }