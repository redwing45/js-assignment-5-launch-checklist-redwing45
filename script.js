

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById('fuelStatus')
    let faultyItems = documment.getElementById('faultyItems')
    let launchStatus = document.getElementById('launchStatus')
    let cargoStatus = document.getElementById('cargoStatus')
    let launchForm = document.getElementById('launchForm')
//    let div = `pilotStatus.innerHTML = pilotStatus.value + 'ready'
//    copilotStatus.innerHTML = copilotStatus.value + 'ready' `

    launchForm.addEventListener("submit", (event)=>{
         if(pilotStatus.value || copilotStatus.value || cargoStatus.value || fuelStatus.value === ''){
            alert("All fields are required!")
            event.preventDefault()
        }
        })
    })


   if (fuelStatus.value < 10000){
        launchStatus.innerHTML = 'Shuttle not ready for Launch'
        launchStatus.color = 'red'
        faultyItems.style.visibility = visible
        faultyItems.innerHTML = "There is not enough fuel for this journey!"
   }
   if(cargoStatus.value > 10000){
    cargoStatus.innerHTML = "Shuttle not ready for launch"
    cargoStatus.color = 'red'
    cargoStatus.style.visibility = visible
   } else{
    cargoStatus.innerHTML = "Shuttle is ready for launch"
    cargoStatus.color = 'green'
   }
   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     pickPlanet(listedPlanets)
   })

   
});