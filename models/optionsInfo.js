import mongoose from "mongoose";

const Info = new  mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    option1 : {
        type:String,
        required:true
    },
    option2 : {
        type:String,
        required:true
    },
    option3 : {
        type:String,
        required:true
    },
    option4 : {
        type:String,
        required:true
    }
})

const optionsInfo = new mongoose.model('optionsInfo',Info);

export default optionsInfo;