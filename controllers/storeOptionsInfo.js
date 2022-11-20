import optionsInfo from "../models/optionsInfo.js";

export const storeOptionsInfo = async(req,res) => {
    const data = req.body;
    const storeOptionInfo = new optionsInfo(data);
    try {
        await storeOptionInfo.save();
        res.status(200).send("options data stored successfully")
    }
    catch(error) {
        res.status(400).send(error);
        console.log(error);
    }
}