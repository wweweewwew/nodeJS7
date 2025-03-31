-- топ-20 самых частотных слов по дополнительным заметкам и комментариям
-- questionid = 103

select AnswerText as Notes from Answer
where QuestionID = 103 and Notes != "-1";
