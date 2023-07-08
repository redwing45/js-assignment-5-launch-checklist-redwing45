

let { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper.js");

window.addEventListener("load", function() {
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     let chosenPlanet = pickPlanet(listedPlanets)
     addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.imageUrl)
   })


    // let pilotStatus = document.getElementById("pilotStatus")
    // let copilotStatus = document.getElementById("copilotStatus")
    // let fuelStatus = document.getElementById('fuelStatus')
    let faultyItems = documment.getElementById('faultyItems')
    // let launchStatus = document.getElementById('launchStatus')
    // let cargoStatus = document.getElementById('cargoStatus')
    let launchForm = document.getElementById('launchForm')

    faultyItems.style.visibility = "hidden"
    launchForm.addEventListener("submit", (event)=>{
        event.preventDefault()
        let pilotName = document.querySelector("input[name=pilotStatus]")
        let copilotName = document.querySelector("input[name=copilotStatus]")
        let fuelLevel = document.querySelector("input[name=fuelStatus]")
        let cargoLevel = document.querySelector("input[name=cargoLevel]")

        let pilot = pilotName.value
        let copilot = copilotName.value
        let fuel = fuelLevel.value
        let cargo = cargoLevel.value

        formSubmission(document, launchForm, pilot, copilot, fuel, cargo)
})


   
});