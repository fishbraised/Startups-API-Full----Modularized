import express from "express";
import getStartupsData from "../controllers/getStartupsData.js";
import getStartupsDataByPathParams from "../controllers/getStartupsDataByPathParams.js";

const startUpRouter = express.Router();

startUpRouter.get("/", getStartupsData);
startUpRouter.get("/:field/:term", getStartupsDataByPathParams);

export default startUpRouter;
