import express from "express";
import getStartupsData from "../controllers/getStartupsData.js";
import getStartupsDataByPathParams from "../controllers/getStartupsDataByPathParams.js";

const startUpRouter = express.Router();

startUpRouter.get("/", getStartupsData);
startUpRouter.get("/:field/:term", getStartupsDataByPathParams);

// startUpRouter.get("/search", () => {
//   return;
// });
//
// ?q=phone  query parameters handled in controller
//
// Create more endpoints (just two at most) as said in getUsers.js comment.

// startUpRouter.use((req, res) => {
//   res.status(408).json({
//     message: "Endpoint nNOOOOt found. Please check the endpoint documentation.",
//   });
// });

export default startUpRouter;
