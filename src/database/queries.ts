import type { Database } from "sqlite3"
import type { UpdateAnswer } from "./types"

function logAllQuestions(connection: Database) {
  connection.each('select * from Question', (error, row) => {
    if (error) {
      console.error(error)
    } else {
      console.log(row)
    }
  })
}

function updateAnswer({ connection, userId, questionId, surveyId, updatedAnswer }: UpdateAnswer) {
  const statement = `
    update Answer
    set AnswerText = $updatedAnswer
    where SurveyID = $surveyId
          and UserID = $userId
          and QuestionID = $questionId`

  connection.run(statement, {
    $updatedAnswer: updatedAnswer,
    $surveyId: surveyId,
    $questionId: questionId,
    $userId: userId
  }, (error) => {
    if (error) {
      console.error(error)
    }
  })
}

function getMostFrequentQuestions({ connection, quantity } : MostFrequentQuestions) {
  
}

export { logAllQuestions, updateAnswer }
