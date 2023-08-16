import Option from "../models/option.js";
import Question from "../models/question.js";

export const create = async (req, res) => {
  try {
    await Question.create(req.body).then(() => {
      res.status(200).json({ message: "Question is created successfullt" });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const showQuestion = async(req, res) => {
    try {
       const ques = await Question.findById(req.params.id).populate('options');
       if(!ques) return res.status(400).json({message : "please check agin the id"}) ;
       res.status(200).send(ques);
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

export const deleteQues = async(req, res) => {
    try {
        const ques = await Question.findById(req.params.id);
        if(!ques) return es.status(200).json({message: "id not found in database"});
        else{
            await Question.deleteOne(req.params.id).catch((err)=>{res.status(400).json({message : err.message})});
              // deleting all the option of that question
              await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
              res.send("ques deleted");

        }
    } catch (error) {
        
    }
}