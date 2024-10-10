// BOOT UP WEB GAME

// declare variables:
import scenarios from "./scenes"; // array of objects with run() method
const threads = []; // empty array of objects
const state = { 
    prog: 0,
    area: Math.random() <= 5 ? "forest" : "city", // sets random location
    depth: Math.random() <= 5 ? 0 : 1, // range 0-2
    luck: Math.random() <= 5 ? 0 : 1, // range 0-2
    time: Math.random() <= 5 ? "day" : "night" // sets random time
};
const scene = {}; // empty object
const sceneLog = []; // empty array of objects
const sceneOut = {}; // empty object
const upStateLog = []; // empty array of objects
const upStateOut = {}; // empty object
const console = document.getElementByID("Console")
const option1 = document.getElementByID("Option1")
const option2 = document.getElementByID("Option2")
const option3 = document.getElementByID("Option3")
// declare functions:
function activate(elementID) {
    document.getElementById(elementID).classList.add("active");
}
function deactivate(elementID) {
    document.getElementById(elementID).classList.remove("active")
}
function addConsoleEntry(txt) {
    let entryParent = document.getElementById("Console");
    let newEntry = document.createElement("p");
    newEntry.className = "consoleEntry";
    newEntry.innerHTML = txt;
    entryParent.appendChild(newEntry);
}
function getScenarioIndex() {
    var scenarioIndex;
    // formula using state and Maths methods for scenarioIndex     
    return scenarioIndex;
}
function runScene() {
    sceneOut = {}; //clears sceneOut
    scenarios[getScenarioIndex()].run(); // runs specific scenario, logs changes to sceneOut
    sceneLog.push(sceneOut);
}

// initChar(); // inits character object

while (state.prog < 5) { // inits game loop until progress completes
    runScene();

    // upThreads(upstateOut, sceneOut);
    // updates threads, runs thread narratives
    
    // upState();
    // updates state using Math Methods, updates upStateLog and upStateOut

    // runThreads(state);
    // updates state according to threads
}