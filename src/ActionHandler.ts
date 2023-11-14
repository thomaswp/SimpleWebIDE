export class ActionHandler {
    private actions: Map<string, (data: any) => void> = new Map();

    registerAction(type: string, action: (data: any) => void) {
        this.actions.set(type, action);
    }

    handleActions(actions: any) {
        if (!Array.isArray(actions)) {
            this.handleError(new Error("Actions must be an array"));
        }
        actions.forEach(action => {
            if (action.action) {
                this.handleAction(action.action, action.data);
            } else {
                this.handleError(new Error(`Action without type ${action}`));
            }
        });
        if (actions.length === 0) {
            // Clear div
            this.handleAction("ShowDiv", {html: 'No actions received...'});
        }
    }

    handleAction(type: string, data: any) {
        if (this.actions.has(type)) {
            this.actions.get(type)(data);
        } else {
            this.handleError(new Error(`No action registered for type ${type}`));
        }
    }

    handleError(error: Error) {
        console.error(error);
    }
}