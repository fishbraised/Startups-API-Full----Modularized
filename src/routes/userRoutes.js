import express from "express";
import getUsers from "../controllers/getUsers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);

export default userRouter;
