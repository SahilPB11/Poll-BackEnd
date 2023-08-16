import express from "express";
import { add_vote, createOption, deleteOption } from "../controler/option.js";
const routerOptions=express.Router()

routerOptions.post('/:id/create', createOption);
routerOptions.get('/:id/add_vote',add_vote);
routerOptions.delete('/delete/:id', deleteOption);

export default routerOptions