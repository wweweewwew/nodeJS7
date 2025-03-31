-- вывести процент респондентов, исходя из ответов которых
-- физическому здоровью в компании уделяется больше внимания, чем ментальному

-- select
--   UserID,
--   (select AnswerText from Answer where QuestionID = 64) as Physical,
--   (select AnswerText from Answer where QuestionID = 65) as Mental
-- from Answer
-- where SurveyID = 2019 and (QuestionID = 64 or QuestionID = 65);

select
  count(Answer.UserID) as "Physical is more important then Mental"
from Answer
left join
(select UserID, AnswerText from Answer where QuestionID = 65) as Mental
on Answer.UserID = Mental.UserID
where
  Answer.SurveyID = 2019
  and
  Answer.QuestionID = 64
  and
  "Physical Health" > "Mental Health";
