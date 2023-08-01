// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    document.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if ( isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    let pilotInputCheck = validateInput(pilot);
    let copilotInputCheck = validateInput(copilot);
    let fuelLevelInputCheck = validateInput(fuelLevel);
    let cargoLevelInputCheck = validateInput(cargoLevel);
    if (pilotInputCheck === "Empty" || copilotInputCheck === "Empty" || fuelLevelInputCheck === "Empty" || cargoLevelInputCheck === "Empty") {
        alert("All fields are required");
    } else if (pilotInputCheck === "Is a Number" || copilotInputCheck === "Is a Number" || fuelLevelInputCheck === "Not a Number" || cargoLevelInputCheck === "Not a Number") {
        alert("Make sure to enter valid information to each field.");
    } else {
        if (fuelLevel < 10000) {
            if (cargoLevel > 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color =  "#C7254E";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            } else {
                list.style.visibility = "visible";
                launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
                launchStatus.style.color =  "#C7254E";
                pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
                copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
                fuelStatus.innerHTML = `Fuel level too low for launch`;
                cargoStatus.innerHTML = `Cargo mass low enough for launch`;
             }
        } else if (cargoLevel > 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color =  "#C7254E";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        } else {
            list.style.visibility = "visible";
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            launchStatus.style.color = "#419F6A";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
     }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let data = await planetsReturned.json();

    return data;
}

function pickPlanet(planets) {
    return Math.floor(Math.random() * planets.length);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
