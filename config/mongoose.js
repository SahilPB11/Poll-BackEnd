import mongoose from "mongoose";
const connectString =
  "mongodb+srv://SahilPollApi:SahilPollApi@cluster0.pktzlj5.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose
      .connect(connectString, {
        dbName: "PollApi",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(
          `dataBase is succesfully connected with ${mongoose.connection.host}`
        );
      });
  } catch (error) {
    console.log(err.message);
  }
};

export default connect;
