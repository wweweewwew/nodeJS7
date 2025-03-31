-- вывести процент (относительно всех респондентов)
-- самозанятых респондентов в возрасте до 18 лет

-- self-employed questionid = 5
-- age questionid = 1

select count(*) as SelfEmployedMinors
from Answer
where
  QuestionID = 5
  and UserID in (
    select UserID from Answer where QuestionId = 1 and AnswerText > 0 and AnswerText < 18
  )
  and AnswerText = 1;
