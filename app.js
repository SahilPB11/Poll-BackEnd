import express from "express";


// here i am listen the server on server,js file and alo connected the database there
export const app = express();


// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// here we are using the routes
