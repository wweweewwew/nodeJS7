/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Answer {
  AnswerText: string | null;
  QuestionID: number | null;
  SurveyID: number | null;
  UserID: number | null;
}

export interface Question {
  questionid: number | null;
  questiontext: string | null;
}

export interface Survey {
  Description: string | null;
  SurveyID: Generated<number>;
}

export interface DB {
  Answer: Answer;
  Question: Question;
  Survey: Survey;
}
