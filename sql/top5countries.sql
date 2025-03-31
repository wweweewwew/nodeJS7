select AnswerText as LiveCountry, count(*) as Quantity from Answer
where SurveyId = 2019 and QuestionID = 3
group by LiveCountry
order by Quantity desc
limit 5;
