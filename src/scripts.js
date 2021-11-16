import './css/base.scss';
import { renderUserPage, renderAgentPage } from './render-dom'
import { getData } from './api-calls.js';
import { initializeForm } from './add-trip.js';
import { checkLoginInputs } from './login';
import User from './User';
import TripRepo from './TripRepo';
import Destinations from './Destinations';
import Agent from './Agent';
import MicroModal from 'micromodal';
MicroModal.init();

//Globals
let user, tripRepo, destinations, agent;

function initClasses(allData) {
  const userData = allData[0];
  tripRepo = new TripRepo(allData[1].trips, allData[2].destinations);
  destinations = new Destinations(allData[2].destinations);
  user = new User(userData, tripRepo.getUserTrips(userData.id));
  renderUserPage(user);
  initializeForm();
}

function initAgentClasses(allData) {
  tripRepo = new TripRepo(allData[1].trips, allData[2].destinations);
  destinations = new Destinations(allData[2].destinations);
  console.log(allData[0]);
  agent = new Agent(tripRepo, allData[0].travelers);
  renderAgentPage(agent);
}

export { user, tripRepo, destinations, initClasses, initAgentClasses }