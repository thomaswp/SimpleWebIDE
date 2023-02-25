import { ActionHandler } from "./ActionHandler";
import { config } from "./config"
import { EventHandler } from "./EventHandler";
import { StateTracker } from "./State";

window.onload = () => {

    const problems = document.getElementById("problems");
    for (let problem in config.problems) {
        let option = document.createElement("option")
        option.dataset.value = problem
        option.value = problem + " - " + config.problems[problem]
        problems.appendChild(option)
    }

    let defaultProblem = "139";
    (<HTMLInputElement>document.getElementById("problem_name")).value = defaultProblem + " - " + config.problems[defaultProblem];

    const actionHandler = new ActionHandler();
    const eventHandler = new EventHandler(actionHandler);
    const stateTracker = new StateTracker();

    document.getElementById("submit").addEventListener('click', () => {
        stateTracker.incrementAttempt();
        eventHandler.handleEvent("Submit", stateTracker.getState());
    });

    window["onAceEdited"] = () => {
        eventHandler.handleEvent("File.Edit", stateTracker.getState());
    }

    actionHandler.registerAction("ShowDiv", (data) => {
        document.getElementById("div-display").innerHTML = data.html;
    });

}