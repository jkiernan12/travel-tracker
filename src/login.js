import { getData } from "./api-calls";
import { initClasses } from "./scripts";

const loginPage = document.querySelector("#loginPage");
const mainPage = document.querySelector("#mainPage");
const loginUsername = document.querySelector("#login-username-input");
const loginPassword = document.querySelector("#login-password-input");
const loginButton = document.querySelector("#login-button-input");
const logoutButton = document.querySelector("#logout-button");
const loginError = document.querySelector("#loginErrorMessage")

loginButton.addEventListener("click", checkLoginInputs);
logoutButton.addEventListener("click", logout);

// getData(22, initClasses);
// switchPages(loginPage, mainPage);

function checkLoginInputs(e) {
  e.preventDefault();
  const userIDNumber = Number(loginUsername.value.split("traveler")[1]);
  if (loginPassword.value === "travel" && Number.isInteger(userIDNumber) && userIDNumber > 0 && userIDNumber <= 50) {
    getData(userIDNumber, initClasses);
    switchPages(loginPage, mainPage);
  } else {
    loginError.innerText = "Check username or password";
  }
}

function logout() {
  switchPages(mainPage, loginPage);
}

function switchPages(hide, show) {
  hide.classList.add("hidden");
  show.classList.remove("hidden");
}

export { checkLoginInputs }