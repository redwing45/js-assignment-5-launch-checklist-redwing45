// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
               ` <h2>Mission Destination</h2>
                <ol>
                    <li>name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${img}">`
}




function validateInput(testInput){
    let newVar = Number(testInput)
          if (testInput === " "){
             return "Empty"
              }else if(isNaN(newVar)){
               return "Not A Number"
                }else if(!isNaN(testInput)){
                 return "Is A Number"
                }
            } 

 



function formSubmission(document, launchForm, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!")
    }else if(validateInput(pilot) === "Is A Number" || validateInput(copilot) === "Is A Number" || validateInput(fuelLevel) === "Not A Number" || validateInput(cargoLevel) === "Is A Number"){                    
            alert("Must be a valid input!")
                }else{ 
                     if (fuelStatus.value < 10000){
                    launchStatus.innerHTML = 'Shuttle not ready for Launch'
                    launchStatus.color = 'red'
                    faultyItems.style.visibility = visible
                    faultyItems.innerHTML = "There is not enough fuel for this journey!"
               }else if(cargoLevel.value > 10000){
                cargoLevel.innerHTML = "Shuttle not ready for launch"
                cargoLevel.style.color = 'red'
                cargoLevel.style.visibility = visible
               } else{
                cargoLevel.innerHTML = "Shuttle is ready for launch"
                cargoLevel.style.color = 'green'
               }

               
}
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
