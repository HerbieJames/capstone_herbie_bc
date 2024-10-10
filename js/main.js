// BOOT UP WEB GAME

// import variables
import { sceneIndex } from "./sceneIndex";

// declare variables:
const console = document.getElementByID("Console");
const opt1Btn = document.getElementByID("Option1");
const opt2Btn = document.getElementByID("Option2");
const opt3Btn = document.getElementByID("Option3");

class character {
    constructor(){
    }
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
const ticks = [];

// declare functions
function addConsoleEntry(txt) {
    let entryParent = document.getElementById("Console");
    let newEntry = document.createElement("p");
    newEntry.className = "consoleEntry";
    newEntry.innerHTML = txt;
    entryParent.appendChild(newEntry);
}

// run select scene from sceneIndex using state
//      update characters with scene
//      use threadIndex to update characters
//      activate option buttons

// WAIT for sceneOutcome
//      update sceneIndex with sceneOutcome
//      update state with sceneOutcome
//      push thread to threadIndex from sceneOutcome

// push select threads from threadIndex to threadResolving using threadIndex[...].resolve
// update sceneIndex with threadsResolving
// use threadIndex to update state
// update threadIndex to remove threadsResolving