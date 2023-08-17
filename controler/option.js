import Option from "../models/option.js";
import Question from "../models/question.js";

export const createOption = async (req, res) => {
  try {
    // here we are creating the option in question by finding the id in question
    const opt = await Option.create({
      option: req.body.option,
      question: req.params.id,
    });
    // here we are adding the vote optuion of the id that is given by mongodb by updatequery and using the string
    const updateOpt = await Option.findByIdAndUpdate(opt._id, {
      add_vote: `http://localhost:8000/v1/options/${opt._id}/add_vote`,
    });
    updateOpt.save();
    // now searching the question so that we can append the option in question-->option array
    const ques = await Question.findById({ _id: req.params.id });
    if (!ques) return res.status(400).json({ message: "not added " });
    ques.options.push(updateOpt, ...ques.options);
    ques.save();
    res.status(200).send(ques);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// here we are adding the vote
export const add_vote = async function (req, res) {
  try {
    // this the increment query in which the vote is incremented by one
    const opt = await Option.findByIdAndUpdate(req.params.id, {
      $inc: { vote: +1 },
    });
    if (opt) {
      await opt.save();
      res.send(opt);
    }
    // handling the bad requests
    else {
      res.send("option does not exits");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteOption = async (req, res) => {
  try {
    const opt = await Option.findById(req.params.id);
    if (opt) {
      const quesId = opt.question;
      // finding the question to which the option is deleted and removing that option from its option array
      const ques = await Question.findByIdAndUpdate(quesId, {
        $pull: { options: req.params.id },
      });
      // now absolutely deleting that option
      await Option.findByIdAndDelete(req.params.id);

      console.log(ques);
      res.send("option deleted");
    }
    // handling the bad request
    else {
      res.send("id not exists");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
