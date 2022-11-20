import exactInfo from "../models/exactInfo.js";

export const storeExactInfo = async(req,res) => {
    const data = req.body;
    const addInfo = new exactInfo(data);
    try {
        await addInfo.save();
        res.status(200).send("Exact Information added successfully");
    }
    catch(error) {
        console.log(error);
    }
}