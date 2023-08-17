import express from "express";
import { add_vote, createOption, deleteOption } from "../controler/option.js";
const routerOptions = express.Router();

routerOptions.post("/create/:id", createOption);
routerOptions.get("/add_vote/:id", add_vote);
routerOptions.delete("/delete/:id", deleteOption);

export default routerOptions;
