
interface ActionResponder {
    /**
     * Annotates the given selection of student code with the given text.
     * Line and column numbers are 1-indexed.
     * Can be used to give targetted feedback or a hint.
     */
    annotateCode(startLine: number, startCol: number, endLine: number, endCol: number, annotation: string, color: string): void;

    /**
     * Asks the student a question with a plain text answer.
     * This can be used to test a student's knowledge or ask them to self-explain a concept to improve learning.
     */
    askTextQuestion(question: string): void;

    /**
     * Asks the student a multiple choice question and provides feedback until they get the correct answer.
     * This can be used to clarify an important concept the student misunderstands.
     */
    askMultipleChoiceQuestion(question: string, choices: {text: string, isCorrect: boolean, feedback: string}[]): void;

    /**
     * Shows a plain text informational message to the student.
     */
    showTextMessage(message: string): void;

    /**
     * Shows an HTML informational message to the student.
     */
    showHTMLMessage(message: string): void;

    /**
     * Shows example code, which the student can run.
     */
    showExampleCode(code: string, explanation: string): void;

    /**
     * Shows a short celebratory animation to the student.
     */
    showConfetti(): void;
}