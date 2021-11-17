import './css/base.scss';
import { renderUserPage, renderAgentPage } from './render-dom'
import { initializeForm } from './add-trip.js';
import User from './User';
import TripRepo from './TripRepo';
import Destinations from './Destinations';
import Agent from './Agent';
import MicroModal from 'micromodal';
import { checkLoginInputs } from './login';
MicroModal.init();

//Globals
let user, tripRepo, destinations, agent;

//Functions
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
  agent = new Agent(tripRepo, allData[0].travelers);
  renderAgentPage(agent);
}

export { user, tripRepo, destinations, initClasses, initAgentClasses }