export const config = {
    problems: {
        // "139": "Maximum Odd",
        // "100": "Possibly Undefined",
        "1": "sortaSum",
        // "3": "in1To10",
        "13": "caughtSpeeding",
    },
    endpoints: {
        "SimpleAIF": {
            baseUrl: "http://localhost:5000/",
            events: {
                "Submit": "Submit/",
                "File.Edit": "FileEdit/",
            },
        }
    }
}