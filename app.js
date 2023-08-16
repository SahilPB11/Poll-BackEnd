import express from "express";

export const app = express();


// middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// here we are using the routes
