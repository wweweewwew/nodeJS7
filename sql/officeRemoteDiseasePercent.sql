-- процент работающих на удаленке и в офисе от всех респондентов
-- remote/office questionid = 118

select
  count(UserID)
  * 100
  / (select count(*) from Answer where Answer.SurveyID = 2016 and Answer.QuestionID = 118)
  as "Remote Workers Percent"
from Answer
where
  Answer.SurveyID = 2016
  and
  Answer.QuestionID = 118
  and
  Answer.AnswerText = "Always";

