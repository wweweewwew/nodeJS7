import getConnection from "./database/connection";
// import { logAllQuestions } from "./database/queries";
import { updateAnswer } from "./database/queries";

export function main() {
  try {
    const connection = getConnection()
    // logAllQuestions(connection)
    updateAnswer({ connection, userId: 1, questionId: 1, surveyId: 2014, updatedAnswer: "50" })
  } catch (error) {
    console.error("Failed to start:", error);
    process.exit(1);
  }
}

main();
