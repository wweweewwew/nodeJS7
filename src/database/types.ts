import { Database } from "sqlite3";

interface UpdateAnswer {
  connection: Database;
  userId: number;
  questionId: number;
  surveyId: 2014 | 2016 | 2017 | 2018 | 2019;
  updatedAnswer: string;
}

interface MostFrequentQuestions {
  connection: Database;
  quantity?: number;
}

export type { UpdateAnswer, MostFrequentQuestions }
