import { IQuestion } from "./question";

export interface ITextQuestion extends IQuestion {
  answer?: string;
}
