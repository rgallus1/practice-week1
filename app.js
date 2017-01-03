'use strict';
//DOM variables for the table I want to produce.
var petForm = document.getElementById('pet-form');//pet information
var petName = document.getElementById('petName');//want to play?

var initialNameEntered = false;
var yesButton = document.getElementById('yesButton');//yes to play
var noButton = document.getElementById('noButton');//no to play

var tablePets = document.getElementById('tablePets');


//Check to see if the PetName is already in local storage
// if (localStorage.petName) {
//   petForm.innerHTML='';
//   var pEl = document.createElement('p');
//   pEl.textContent = JSON.parse(localStorage.getItem('petName')) + ', already exists, please enter a new name';
//   petName.appendChild(pEl);
//   //displayYesNoButtons();
// }

//Populate Pet Information
function petHandler(event) {
  console.log('pethandler function');
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

// function yesAddAnother() {
//   console.log('yes add another function')
// }

function makePetsChart(names, chipped) {
  console.log(names);
  var tr;
  var td1;
  var td2;
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.textContent = 'PET NAME';
  td2 = document.createElement('td');
  td2.textContent = 'CHIPPED';
  tr.appendChild(td1);
  tr.appendChild(td2);
  tablePets.appendChild(tr);
  for (var i = 0; i < chipped.length; i++) {
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td1.textContent = names;
    console.log(names);
    td2 = document.createElement('td');
    td2.textContent = chipped;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tablePets.appendChild(tr);
  }
}

function makeTableHeading() {
  var text = document.createElement('p');
  text.textContent = 'Patient Information';
}
makeTableHeading();

function renderPetTable() {
  var localNames = JSON.parse(localStorage.getItem('petName'));
  var localChipped = JSON.parse(localStorage.getItem('chipped'));
  console.log('in render Pet Table', localNames);
  makePetsChart(localNames, localChipped);
}
renderPetTable();


petForm.addEventListener('submit', petHandler);
// yesButton.addEventListener('click',yesAddAnother);
///noButton.addEventListener('click', noDontAddAnother);
