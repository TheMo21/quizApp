import mongoose, { Schema, Document, model } from "mongoose";

export interface Quiz extends Document {
  question: String;
  answer: String;
}

const quizSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

export const quizModel =
  mongoose.models["Quiz"] || model<Quiz>("Quiz", quizSchema);
