export enum QuestionType {
  TEXT,
  MULTIPLE_CHOICE
}

export interface IQuestion {
  question?: string;
  type: QuestionType;
}
