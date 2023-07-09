// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function(result) {
       listedPlanets = result;
   }).then(function () {
    let chosenPlanet = pickPlanet(listedPlanets);
     addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
   })

    
    let list = document.getElementById('faultyItems')
    list.style.visibility = "hidden"
    let launchForm = document.querySelector('form')

    launchForm.addEventListener("submit", function(event){
        event.preventDefault()
        let pilotName = document.querySelector("input[name=pilotName]")
        let pilot = pilotName.value
        let copilotName = document.querySelector("input[name=copilotName]")
        let copilot = copilotName.value
        let fuelInput = document.querySelector("input[name=fuelLevel]")
        let fuelLevel = fuelInput.value
        let cargoInput = document.querySelector("input[name=cargoMass]")
        let cargoLevel = cargoInput.value


        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel)
})


   
});