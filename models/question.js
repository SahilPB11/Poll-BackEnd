import mongoose from "mongoose";

// here we are making the schema for adding question and also addig the options
const Schema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    options:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"option"
        }
    ]
});

const Question = mongoose.model('Question', Schema);
export default Question;