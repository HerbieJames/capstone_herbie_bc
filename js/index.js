// BOOT UP WEB GAME

// declare variables:
const console = document.getElementByID("Console");
const opt1Btn = document.getElementByID("Option1");
const opt2Btn = document.getElementByID("Option2");
const opt3Btn = document.getElementByID("Option3");

const threads = []; // empty array of objects - something which resolves over time
const state = { 
    prog: 0,
    area: Math.random() <= 5 ? "forest" : "city", // sets random location
    depth: Math.random() <= 5 ? 0 : 1, // range 0-2
    luck: Math.random() <= 5 ? 0 : 1, // range 0-2
    time: Math.random() <= 5 ? "day" : "night" // sets random time
};
const sceneLog = []; // empty array of objects
const sceneOut = {
    option: 0,
    narration: "",
};
const upStateLog = []; // empty array of objects
const upStateOut = {}; // empty object
// declare scenes
const scenarios = [
    { // index = 0
        intro: "You arrive at a campfire in the woods. All seems calm.",
        outcome1: {
            time: state.time === day ? "night" : "day"
        }
    },

    { // index = 1
        intro: "You arrive at a quiet Inn near the edge of town.",
        outcome1: {
            time: state.time === day ? "night" : "day",
            thread: Math.random() <= 0.05 ? {
                name: "You have a tail."
            } : {},
        }
    }
];

// declare functions:
function activate(elementID) {
    document.getElementById(elementID).classList.add("active");
};
function deactivate(elementID) {
    document.getElementById(elementID).classList.remove("active");
};
function addConsoleEntry(txt) {
    let entryParent = document.getElementById("Console");
    let newEntry = document.createElement("p");
    newEntry.className = "consoleEntry";
    newEntry.innerHTML = txt;
    entryParent.appendChild(newEntry);
};
function getScenarioIndex() {
    var scenarioIndex;
    // formula using state and Maths methods for scenarioIndex     
    return scenarioIndex;
};
function run(intro = "Nothing seems apparent to you here.", op1 = "Move ahead.", outro1 = "You move on.", op2, outro2, op3, outro3) {
    addConsoleEntry(intro)
    // options:
    var out = false;
    while (out === false) {
        activate(option1);
        op1Btn.innerHTML = op1
        op1Btn.addEventListener(click, () => {
            addConsoleEntry(outro1);
            sceneOut.narration = outro1
            sceneOut.option = 1
            out = true;
        });
        if (op2 === true){
            activate(option2);
            op2Btn.innerHTML = op2
            op2Btn.addEventListener(click, () => {
                addConsoleEntry(outro2);
                sceneOut.narration = outro2
                sceneOut.option = 2
                out = true;
            });
        }
        if (op3 === true){
            activate(option3);
            opt3Btn.innerHTML = op3
            opt3Btn.addEventListener(click, () => {
                addConsoleEntry(outro3);
                sceneOut.narration = outro3
                sceneOut.option = 3
                out = true;
            });
        }    
    }
};
function runScene() {
    var params = {};
    sceneOut = {}; //clears sceneOut
    /*  GET A DATABASE!
    params = scenarios[getScenarioIndex()];
    run(...params); // runs the scenario
    */
    sceneLog.push(sceneOut);
};
// initChar(); // inits character object

// begin game loop
while (state.prog < 5) { // inits game loop until progress completes
    runScene(); // runs intro. waits until player returns choice to sceneOut. runs outro

    // upThreads(upstateOut, sceneOut);
    // updates threads, runs thread narratives
    
    // upState();
    // updates state using Math Methods, updates upStateLog and upStateOut

    // runThreads(state);
    // updates state according to threads
}
// end