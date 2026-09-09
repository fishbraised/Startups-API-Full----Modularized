import express from "express";
import startUpRouter from "./src/routes/startUpRoutes.js";
import userRouter from "./src/routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/startups", startUpRouter);
app.use("/users", userRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found. Please check the endpoint documentation.",
  });
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}...`);
});

// after doing everything commit and check if redeployed in Render or not.

// use react-router (frontend):
// after doing all that, test in a small new react project with a basic startup card for each startup
// to make a fetch call to this Api.
// you can create a router for the small, new react project where it displays startup card in startups routes and user cards in userroutes.

// ^^ Summary: there is your own express server, and you use the express server for react-router in a new project.
