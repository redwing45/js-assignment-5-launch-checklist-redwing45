// Write your helper functions here!
require('isomorphic-fetch');

let pilotName = document.querySelector("input[name=pilotName]")
let pilot = pilotName.value
let copilotName = document.querySelector("input[name=copilotName]")
let copilot = copilotName.value
let fuelLevel = document.querySelector("input[name=fuelLevel]")
let fuel = fuelLevel.value
let cargoInput = document.querySelector("input[name=cargoMass]")
let cargo = cargoInput.value


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let htmlStuff = document.getElementById("missionTarget")
     htmlStuff.innerHTML = 
    ` <h2>Mission Destination</h2>
                <ol>
                    <li>name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`

}




function validateInput(testInput) {
    let newVar = Number(testInput)
    if (testInput === " ") {
        return "Empty"
    } else if (isNaN(newVar)) {
        return "Not A Number"
    } else if (!isNaN(testInput)) {
        return "Is A Number"
    }
}





function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoInput) {   
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById('fuelStatus')
    let launchStatus = document.getElementById('launchStatus')
    let cargoStatus = document.getElementById('cargoStatus')

    

    if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoInput) === "Empty") {
        alert("All fields are required!")
    } else if (validateInput(pilotName) === "Is A Number" || validateInput(copilotName) === "Is A Number" || validateInput(fuelLevel) === "Not A Number" || validateInput(cargoInput) === "Not A Number") {
        alert("Must be a valid input!")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `${pilotName.value} ready for launch!`;
        copilotStatus.innerHTML = `${copilotName.value} ready for launch!`;
        if (fuelLevel < 10000 && cargoInput <= 10000) {
            launchStatus.innerHTML = 'Shuttle not ready for Launch'
            launchStatus.style.color = 'red'
            fuelStatus.innerHTML = "There is not enough fuel for this journey!"
        } else if (fuelLevel >= 10000 && cargoInput > 10000) {
            launchStatus.innerHTML = 'Shuttle not ready for Launch'
            launchStatus.style.color = 'red'
            cargoStatus.innerHTML = "There is too much mass to take off!"
        } else if (fuelLevel < 10000 && cargoInput > 10000) {
            launchStatus.innerHTML = 'Shuttle not ready for Launch'
            launchStatus.style.color = 'red'
            fuelStatus.innerHTML = "There is not enough fuel for this journey!"
            cargoStatus.innerHTML = "There is too much mass to take off!"
        } else {
            launchStatus.innerHTML = "Shuttle is ready for launch!"
            cargoStatus.style.color = 'green'
            fuelStatus.innerHTML = "There is enough fuel for launch!"
           
        }


    }

}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function (response) {
            if (response.status >= 400) {
                // console.log(response.status)
                throw new Error("Response not what you want!")
            } else {
                return response.json()
            }
        });
    return planetsReturned

}


function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
    return planets[index]
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
