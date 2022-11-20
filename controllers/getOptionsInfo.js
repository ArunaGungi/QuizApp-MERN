import optionsInfo from "../models/optionsInfo.js";

export const getOptionsInfo = async(req,res) => {

    try {
        const getData = await optionsInfo.find();
        res.status(200).send(getData);
    }
    catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}