import express from "express";
import getUsers from "../controllers/getUsers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
// Make user Search route is here.

export default userRouter;
