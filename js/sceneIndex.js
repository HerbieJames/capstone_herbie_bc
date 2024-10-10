export const sceneIndex = [
    {   preReq: { // for this scene to be selected, state must meet the pre-requisite
            area: "forest",
            time: "night",
        },
        intro: {
            name: "Forest", // scene name
            log: // intro narration
            "You come across a campfire in the woods. It seems calm here.", 
            script: () =>  { // intro effect on characters
            } },
        outcome1: {
            name: "Move on.", // option1 name
            log:
            "You move on.", // option1 outro narration
            script: () => {   
                state.time = "day";
            } } },

    {   preReq: { // index 1
            area: "city",
            depth: 0,
        },
        intro: { 
            name: "City",
            log:
            "You come across an Inn at the edge of town",
            script: () => {
            
            } },
        outcome1: {
            name: "Move on.",
            log:
            "You move on.",
            script: () => { 
                state.time = state.time === "day" ? "night" : "night";
                if (Math.random + state.luck <= 0.2) {
                    threadIndex.push( {
                        name: "You have a tail.",
                        memOfState: state,
                        chaScript: () => { // passively effects the character
                            if (character.presence <= 1) {character.presence +=1;}
                        }, 
                        staScript: () => { // passively effects the state
                            if (state.luck === 0.2) {state.luck = 0.1;}
                        },
                        resolve: () => { // checks whether a thread should be moved to threadsResolving
                            if (memOfState.prog != state.prog) {return true}
                        }});
                }               
            } } }
];
