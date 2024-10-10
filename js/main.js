/* BOOT UP WEB GAME

// declare variables:
import scenarios from "./scenes"; // array of objects with run() method
const threads = []; // empty array of objects
const state = { 
    area: '', // empty string
    depth: 0
};
const sceneLog = []; // empty array of objects
const sceneOut = {}; // empty object
const upstateLog = []; // empty array of objects
const upSceneOut = {}; // empty object

// declare functions:
function getScenarioIndex() {
    var scenarioIndex;

    // formula using state and Maths methods for scenarioIndex
            
    return scenarioIndex;
}

initState(); // inits state object, runs narrative intro

initChar(); // inits character object

while (state.prog < 5) { // inits game loop until progress completes
    runScene() {
        var sceneOut = {} // stores all global variable changes made in scene
        scenarios[getScenarioIndex()].run(); // runs specific scenario
        sceneLog.push(sceneOut);
        sceneOut = sceneLog[sceneLog.length - 1];
    }

    upThreads(upstateOut, sceneOut);
    // updates threads, runs thread narratives
    
    upState();
    // updates state using Math Methods, updates upStateLog and upStateOut

    runThreads(state);
    // updates state according to threads
}

*/