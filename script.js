// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let destinationPlanet = listedPlanets[pickPlanet(listedPlanets)];
        addDestinationInfo(document, destinationPlanet.name, destinationPlanet.diameter, destinationPlanet.star, destinationPlanet.distance, destinationPlanet.moons, destinationPlanet.image);
    })

    window.addEventListener("submit", function(e) {
        const inputForm = document.querySelector("form");
        const faultyItems = document.getElementById("faultyItems");
        // console.log("submitted");
        // console.log(inputForm.pilotName.value);
        // console.log(inputForm.copilotName.value);
        // console.log(inputForm.fuelLevel.value);
        // console.log(inputForm.cargoMass.value);
        e.preventDefault();
        formSubmission(document, faultyItems, inputForm.pilotName.value, inputForm.copilotName.value, inputForm.fuelLevel.value, inputForm.cargoMass.value);
    });

});