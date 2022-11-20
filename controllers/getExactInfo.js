import exactInfo from "../models/exactInfo.js";

export const getExactInfo = async(req,res) => {
    const data = req.query;
    console.log(data);
    try {
        const answerInfo = await exactInfo.find(data);
        answerInfo.map((index,key) => (
            res.status(200).send(index.answer)
        ));
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}