'use strict';
//DOM variables for the table I want to produce.
var petForm = document.getElementById('pet-form');//pet information
var petName = document.getElementById('petName');//want to play?
//var allPets = [];
var initialNameEntered = false;
var yesButton = document.getElementById('yesButton');//yes to play
var noButton = document.getElementById('noButton');//no to play

// var petData = function(petFirstName, petLastName, streetAddress, city, state, zip, dateOfBirth, chipped) {
//   this.petFirstName = petFirstName;
//   this.petLastName = petLastName;
//   this.streetAddress = streetAddress;
//   this.city = city;
//   this.state = state;
//   this.zip = zip;
//   this.dateOfBirth = dateOfBirth;
//   this.chipped = chipped;
//   allPets.push(this); //this pushes the data above into the all Pets array
// }


//Check to see if the PetName is already in local storage
if (localStorage.petName) {
  petForm.innerHTML='';
  var pEl = document.createElement('p');
  pEl.textContent = JSON.parse(localStorage.getItem('petName')) + ', already exists, please enter a new name';
  petName.appendChild(pEl);
  //displayYesNoButtons();
}

//Populate Pet Information
function petHandler(event) {
  event.preventDefault();
  localStorage.petName = JSON.stringify(event.target.petName.value);
  localStorage.streetAddress = JSON.stringify(event.target.streetAddress.value);
  localStorage.city = JSON.stringify(event.target.city.value);
  localStorage.state = JSON.stringify(event.target.state.value);
  localStorage.zip = JSON.stringify(event.target.zip.value);
  localStorage.chipped = JSON.stringify(event.target.chipped.value);
  console.log(localStorage);
  petNamePopulated();
}

function petNamePopulated() {
  petForm.innerHTML='';
  if (localStorage.petName && initialNameEntered === false) {
    var pEl = document.createElement('p');
    pEl.textContent = JSON.parse(localStorage.getItem('petName')) + ', information has been entered';
    petName.appendChild(pEl);
    initialNameEntered = true;
    pEl.textContent = 'Do you wish to enter another patient?';
    petName.appendChild(pEl);
    displayYesNoButtons();
  }
}

//Generate a yes and no button
function displayYesNoButtons() {
  var newButtonYes = document.createElement('BUTTON');
  newButtonYes.textContent = 'YES';
  yesButton.appendChild(newButtonYes);
//No button displayed
  var newButtonNo = document.createElement('BUTTON');
  newButtonNo.textContent = 'NO';
  noButton.appendChild(newButtonNo);
}

petForm.addEventListener('submit', petHandler);
//yesButton.addEventListener('click',yesLetsPlay);
//noButton.addEventListener('click',noLetsNotPlay);
