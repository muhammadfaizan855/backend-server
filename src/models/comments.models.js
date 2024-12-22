import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    comment : {
        type : String,
        required : [true , "comment is req"]
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required : [true , "Post is required"]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true , "User is required"]
    }
},{
    timestamps : true,
})



export default mongoose.model("Comment" , commentSchema)