import { urlencoded, json } from "body-parser";
import express from "express";
import connection from "./config/db";
import userRoute from "./routes/user"

const app = express();
const port = process.env.PORT || 3000;

// cuando este funcionando por port : 3000 mandara un mensje por consola.

app.use(urlencoded({extended:true}));
app.use("/users", userRoute);
app.use((
  err:Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
  ) => {
    res.status(500)
    .json({ msg:err.message});
  })

connection.sync().then(() => {
  console.log("connection sync complete");
}).catch((err:any)=>{
  console.log("Error:",err.message);
});

app.listen(port, () => {
  console.log('listening on port: '+port);
  });
