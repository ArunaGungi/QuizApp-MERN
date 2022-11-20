import express, { application } from "express";
import { DBConnection } from "./database.js";
import dotenv from "dotenv";
import cors from "cors";
import quizRoutes from "./routes/storeInfo.js";

dotenv.config();
DBConnection();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/AAQuiz/api/v1',quizRoutes);
app.listen(port, () => console.log(`connection to mongodb established successfully ${port}`))