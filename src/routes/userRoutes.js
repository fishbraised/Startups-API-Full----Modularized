import express from "express";
import getUsers from "../controllers/getUsers.js";
import getSearchUsers from "../controllers/getSearchUsers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/search", getSearchUsers);

export default userRouter;
