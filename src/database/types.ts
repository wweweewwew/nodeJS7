import { Database } from "sqlite3";

interface UpdateAnswer {
  connection: Database;
  userId: number;
  questionId: number;
  surveyId: 2014 | 2016 | 2017 | 2018 | 2019;
  updatedAnswer: string;
}

export type { UpdateAnswer }
