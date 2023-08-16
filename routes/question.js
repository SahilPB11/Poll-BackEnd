import express from "express";
import {
  createQuestion,
  deleteQues,
  showQuestion,
} from "../controler/question.js";
const routerQuestion = express.Router();

routerQuestion.post("/create", createQuestion);
routerQuestion.get("/view/:id", showQuestion);
routerQuestion.delete("/delete/:id", deleteQues);

export default routerQuestion;
