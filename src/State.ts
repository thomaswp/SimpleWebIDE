export class State {
    EventID: string;
    SubjectID: string;
    ToolInstances: string = "SimpleIDE-1.0";
    ClientTimestamp: string;
    CourseID: string = "Test101";
    AssignmentID: string = "Assignment01";
    ProblemID: string;
    Attempt: number;
    CodeState: string;
}

export class StateTracker {

    private nextEventID: number = 0;
    private nAttempts: number = 0;

    incrementAttempt() {
        this.nAttempts++;
    }

    getState(): State {
        let state = new State();

        state.EventID = this.nextEventID.toString();
        this.nextEventID++;

        state.SubjectID = (<HTMLInputElement>document.getElementById("user_id")).value;
        state.ClientTimestamp = new Date().toDateString();
        let problemNameInput = (<HTMLInputElement>document.getElementById("problem_name"));
        let value = problemNameInput.value;
        var option = Array.prototype.find.call((<HTMLSelectElement>problemNameInput.list).options, function(option) {
            return option.value === value;
        });
        state.ProblemID = option.dataset.value;
        state.Attempt = this.nAttempts;
        state.CodeState = (<HTMLTextAreaElement>document.querySelector("form textarea[name=student_code]")).value;

        return state;
    }
}