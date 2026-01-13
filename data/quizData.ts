import { QuizSubject } from '../types';

export const subjects: Record<string, QuizSubject> = {
   

    aptitude: {
        "logical_reasoning": {
            1: [
                {
                    question: "Find the next number in the series: 2, 5, 10, 17, 26, ?",
                    options: ["35", "36", "37", "38"],
                    correct: 2,
                    explanation: "The pattern is n² + 1, starting with n=1. For n=6, the value is 6² + 1 = 37."
                },
                {
                    question: "All books in the library are fiction. 'The Great Gatsby' is a book in the library. Therefore, 'The Great Gatsby' is:",
                    options: ["Non-fiction", "Fiction", "A magazine", "Cannot be determined"],
                    correct: 1,
                    explanation: "This is a simple deductive reasoning problem. If the premise (all books in the library are fiction) is true, and the condition is met ('The Great Gatsby' is in the library), then the conclusion must be true."
                }
            ],
            2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
        }
    },
};