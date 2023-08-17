import Option from "../models/option.js";
import Question from "../models/question.js";

// in createQuestion we are creadting the question
export const createQuestion = async (req, res) => {
  try {
    console.log("hiii");
    await Question.create(req.body).then((data) => {
      res
        .status(200)
        .json({ message: "Question is created successfullt", data: data });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// here we are finding the question by its id
export const showQuestion = async (req, res) => {
  try {
    const ques = await Question.findById(req.params.id).populate("options");
    if (!ques)
      return res.status(400).json({ message: "please check agin the id" });
    res.status(200).send(ques);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// here we are deleting the questions and also options which are present in options db with the refrence of question id
export const deleteQues = async (req, res) => {
  try {
    const ques = await Question.findById(req.params.id);
    if (!ques)
      return res.status(200).json({ message: "id not found in database" });
    else {
      await Question.deleteOne({ _id: req.params.id }).catch((err) => {
        res.status(400).json({ message: err.message });
      });
      // deleting all the option of that question
      await Option.deleteMany({ question: req.params.id })
        .clone()
        .catch(function (err) {
          console.log(err);
        });
      res.send("ques deleted");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
