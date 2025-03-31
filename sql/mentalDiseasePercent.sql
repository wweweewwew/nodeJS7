-- вывести количество и процент респондентов с ментальными расстройствами
-- questionid = 33

select
(select
   count(*) as Quantity
   from Answer
   where AnswerText = "Yes" and QuestionID = 33 and SurveyID = 2019
) * 100 / count(*) as Percent
from Answer
where QuestionID = 33 and SurveyID = 2019;
