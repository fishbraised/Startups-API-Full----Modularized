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
