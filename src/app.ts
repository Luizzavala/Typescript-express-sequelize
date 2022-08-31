import { urlencoded, json } from "body-parser";
import express from "express";
import sequelize from './config/db';
import userRoute from "./routes/user"

const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({ extended: true }));
app.use("/users", userRoute);
app.use((
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.status(500)
    .json({ msg: err.message });
})

app.listen(port);

sequelize.sync().then(() => {
  console.log("Connection completed, Running in port: " + port);
}).catch((err: any) => {
  console.log("Error:", err.message);
});
