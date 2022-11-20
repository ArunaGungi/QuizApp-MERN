import express from "express";
import { getExactInfo } from "../controllers/getExactInfo.js";
import { getOptionsInfo } from "../controllers/getOptionsInfo.js";
import { storeExactInfo } from "../controllers/storeInfo.js";
import { storeOptionsInfo } from "../controllers/storeOptionsInfo.js";

const quizRoutes = express.Router();

quizRoutes.post("/addQues",storeExactInfo);
quizRoutes.post("/addOptionsQues",storeOptionsInfo);
quizRoutes.get('/getQuestions',getOptionsInfo);
quizRoutes.get('/getAnswers?',getExactInfo);

export default quizRoutes;