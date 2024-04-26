import express from "express";
import cors from "cors";
import { routerFactory } from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors());

routerFactory(app);

app.listen(3001, () => {
  console.log(`listening on http://localhost port 3001`);
});
