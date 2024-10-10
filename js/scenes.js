const scenarios = [
    {name: "scene1", run() {
        addConsoleEntry( //intro
        "this is the intro scene")
        // options:
        activate(option1);
        option1.innerHTML =
        "this is option 1"
        option1.addEventListener(click, () => {
            sceneOut = addConsoleEntry( //outro
                "this is the outro of the scene")
            sceneOut;
        });
        activate(option2);
        option2.innerHTML =
        "this is option 2"
        option2.addEventListener(click, () => {
        });

        activate(option3);
        option3.innerHTML =
        "this is option 3"
        option1.addEventListener(click, () => {
        });
    }},
    {name: "scene2", run() {
        }},
]

scenarios;