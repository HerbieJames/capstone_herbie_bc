// BOOT UP WEB GAME

// import variables
import { sceneIndex } from "./sceneIndex";

// declare variables:
const character = {
    name: "",
    str: 1,
    heart: 1,
    edge: 1,
    heal: 3,
    vigor: 3,
    pres: 0
}
const threadIndex = []; // empty array of objects - something which resolves over time
class thread {
    constructor(){
    }
}
const state = { 
    prog: 0,
    area: "", // "forest", "city" or "dungeon"
    depth: 0, // 0 -> 2
    luck: 0, // 0 -> 0.2
    time: "" // "night" or "day"
}
const scene = {};

// declare functions
function addConsoleEntry(txt) {
    let entryParent = document.getElementById("Console");
    let newEntry = document.createElement("p");
    newEntry.className = "consoleEntry";
    newEntry.innerHTML = txt;
    entryParent.appendChild(newEntry);
}

// run script

// game loop
scene = () => {
    // select scene from sceneIndex using state
    //      hold randomly from sceneIndex
    //      attempt to validate preReq
    //      if fails, repeat attempt for new hold
    //      if passes, release 
    var heldScene;
    while (valid === false) {
        heldScene = sceneIndex[Math.floor(Math.random()*(sceneIndex.length))];
        valid = true;
        for (const property in heldScene.preReq) {
            if (state.property != heldScene.preReq[property]) {valid = false};
        }
    }
    return heldScene;
}
// run scene
// scene intro
//      use scene intro to update sceneIndex
//      use scene intro to update character
scene.intro.script()
//      use scene intro to update console
addConsoleEntry(scene.intro.log);
//      use threadIndex to update characters   
for (const element in threadIndex) {
    element.chaScript();
}

// update gamePanel
//      update title
//      update gameViewPort
//      update optBtns

// WAIT for sceneOutcome
//      use sceneOutcome to update sceneIndex
//      use sceneOutcome to update state
//      use sceneOutcome to push thread to threadIndex from sceneOutcome

// push select threads from threadIndex to threadResolving using threadIndex[...].resolve
//      update sceneIndex with threadsResolving
//      use threadIndex to update state
//      update threadIndex to remove threadsResolving