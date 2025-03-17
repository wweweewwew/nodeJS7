import type { Database } from "sqlite3"
import type { UpdateAnswer, MostFrequentQuestions } from "./types"

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

function getMostFrequentQuestions({ connection, quantity, cb }: MostFrequentQuestions) {
  const statement = `select questiontext as question, count(*) as answers
    from Answer
    left join Question
    on Question.questionid = Answer.QuestionID
    group by Answer.QuestionID
    order by answers desc
    limit $quantity`

  connection.all(statement, { $quantity: quantity ?? 5 }, (error, rows) => {
    if (error) {
      console.error(error)
      return
    }

    cb(rows)
  })
}

export { logAllQuestions, updateAnswer, getMostFrequentQuestions }
