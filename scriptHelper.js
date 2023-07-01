// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    testInput.value = String
 if (testInput.value = String){
  return "Is a string"
 }else if(testInput.value != String){
    return "Is not a string"
 }else if(testInput.value === null){
    return "Empty"
 }
    if ("Is a string"){
        alert("Must be a number!")
    }else if("is not a string"){
        alert("Must be a word!")
    }else("Empty"){
        alert("Must have a value")
    }
 }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
     let planetData = json;
     console.log(planetData)
        })
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets(Math.floor(Math.random()*planets.length))
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
