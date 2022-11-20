import mongoose from "mongoose";

const data = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
})
const exactInfo = mongoose.model('questionInfo',data);

export default exactInfo;