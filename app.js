import express from "express";
import routerOptions from "./routes/options.js";
import routerQuestion from "./routes/question.js";


// here i am listen the server on server,js file and alo connected the database there
export const app = express();


// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// here we are using the routes
app.use('/v1',routerOptions);
app.use('/v1',routerQuestion);
